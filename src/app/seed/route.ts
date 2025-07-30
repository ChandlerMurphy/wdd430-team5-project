import postgres from "postgres";
import bcrypt from "bcrypt";

import {
  Users,
  PredefinedCategoriesData,
  Orders,
  OrderedItems,
  Products,
  Messages,
} from "../../../lib/placeholder";

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

const CreateUserTable = async () => {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE TYPE user_role AS ENUM ('artisans', 'customer', 'admin')`;
  await sql`CREATE TABLE IF NOT EXIST users(
  user_id UUID DEFAULT uuid-generate_v4() PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  user_type user_role NOT NULL,
  profile_picture TEXT NOT NULL,
  bio TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
  )`;

  const insertUsers = await Promise.all(
    Users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 12);
      return sql`
      INSERT INTO users (user_id, name, email, password, user_type, profile_picture, bio)
      VALUES(${user.user_id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.user_type}, ${user.profile_picture}, ${user.bio})
      ON CONFLICT (id) DO NOTHING`;
    })
  );
  return insertUsers;
};

const CreateProductCartegoriesTable = async () => {
  await sql`CREATE TYPE category_type as ENUM ('fashion','electronics','furniture','books','services')`;
  await sql`  CREATE TABLE IF NOT EXIST product_category(
  category_id SERIAL PRIMARY KEY,
  category_name category_type NOT NULL,
  category_description TEXT NOT NULL,
  )`;

  const insertIntoCategories = await Promise.all(
    PredefinedCategoriesData.map(async (category) => {
      return sql`
      INSERT INTO product_categories(category_id, category_name, category_description)
        VLAUES(${category.category_id}, ${category.category_name}, ${category.category_description})
        ON CONFLICT (id) DO NOTHING`;
    })
  );
  return insertIntoCategories;
};

const CreateOrderTable = async () => {
  await sql`CREATE TYPE AS ENUM ('pending', 'shipped', 'delivered')`;
  await sql`CREATE TABLE IF NOT EXIST product_order(
  order_id SERIAL PRIMARY KEY,
  FOREIGN KEY(user_id) REFRECNCES users(user_id)
  total_amount INTEGER NOT NULL,
  status shipping_stauts NOT NULL,
  order_date TIMESTAMP DEFAULT NOW();
  )`;

  const insertIntoOrder = await Promise.all(
    Orders.map(async (order) => {
      return sql`
      INSERT INTO product_order(order_id, user_id, total_amount, status)
      VALUES(${order.order_id}, ${order.user_id}, ${order.total_amount}, ${order.status})
      ON CONFLICT (id) DO NOTHING`;
    })
  );
  return insertIntoOrder;
};

const CreateOrderItemTable = async () => {
  await sql`CREATE TABLE IN NOT EXIST ordered_items(
  ordered_item_id SERIAL PRIMARY KEY,
  FOREIGN KEY(order_id) REFERENCES order(order_id),
  FOREIGN KEY(product_id) REFERENCES product(product_id),
  quantity INTEGER NOT NULL,
  price_at_purchase INTEGER NOT NULL
  )`;

  const InsertOrderedItems = await Promise.all(
    OrderedItems.map(async (orderedItem) => {
      return sql`
    INSERT INTO ordered_items(ordered_item_id, order_id, product_id, quantity, price_at_purchase)
    VALUES(${orderedItem.order_id}, ${orderedItem.order_item_id}, ${orderedItem.price_at_purchase}, ${orderedItem.product_id}, ${orderedItem.quantity})
    ON CONFLICT (id) DO NOTHING`;
    })
  );
  return InsertOrderedItems;
};

const CreateProductTable = async () => {
  await sql`CREATE TABLE IF NOT EXIST products(
  product_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  quantity INTEGER not null,
  FOREIGN KEY(category_id) REFREENCES product_category(category_id)
  product_image TEXT NOT NULL,
  added_at TIMESTAMP DEFAULT NOW(),
  )`;

  const InsertProducts = await Promise.all(
    Products.map(async (product) => {
      return sql`
      INSERT INTO products(product_id, title, description, price, qauntity, category_id, product_image)
      VALUES(${product.product_id}, ${product.title}, ${product.description}, ${product.description}, ${product.price}, ${product.quantity}, ${product.category_id}, ${product.product_image})
      ON CONFLICT (id) DO NOTHING
      `;
    })
  );
  return InsertProducts;
};

const CreateMessagesTable = async () => {
  await sql`CREATE TABLE IF NOT EXIST messages(
  message_id SERIAL PRIMARY KEY,
  FOREIGN KEY(sender_id) REFREENCES users(user_id),
  FOREIGN KEY(receiver_id) REFREENCES users(user_id)
  content TEXT NOT NULL,
  added_at TIMESTAMP DEFAULT NOW(),
  )`;

  const InsertMessages = await Promise.all(
    Messages.map(async (message) => {
      return sql`
      INSERT INTO products(message_id,  sender_id, receiver_id, content)
      VALUES(${message.message_id}, ${message.receiver_id}, ${message.sender_id}, ${message.content})
      ON CONFLICT (id) DO NOTHING
      `;
    })
  );
  return InsertMessages;
};

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      CreateMessagesTable(),
      CreateOrderItemTable(),
      CreateProductCartegoriesTable(),
      CreateOrderTable(),
      CreateProductTable(),
      CreateUserTable(),
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
