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
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      user_type user_role NOT NULL,
      profile_picture TEXT NOT NULL,
      bio TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  const insertUsers = await Promise.all(
    Users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 12);
      return sql`
        INSERT INTO users (user_id, name, email, password, user_type, profile_picture, bio)
        VALUES (${user.user_id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.user_type}, ${user.profile_picture}, ${user.bio})
        ON CONFLICT (user_id) DO NOTHING
      `;
    })
  );
  return insertUsers;
};

const CreateProductCategoriesTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS product_category (
      category_id SERIAL PRIMARY KEY,
      category_name category_type NOT NULL,
      category_description TEXT NOT NULL
    )
  `;

  const insertIntoCategories = await Promise.all(
    PredefinedCategoriesData.map(async (category) => {
      return sql`
        INSERT INTO product_category (category_id, category_name, category_description)
        VALUES (${category.category_id}, ${category.category_name}, ${category.category_description})
        ON CONFLICT (category_id) DO NOTHING
      `;
    })
  );
  return insertIntoCategories;
};

const CreateOrderTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS product_order (
      order_id SERIAL PRIMARY KEY,
      user_id UUID NOT NULL,
      total_amount NUMERIC(10,2) NOT NULL,
      status order_status NOT NULL,
      order_date TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY(user_id) REFERENCES users(user_id)
    )
  `;

  const insertIntoOrder = await Promise.all(
    Orders.map(async (order) => {
      return sql`
        INSERT INTO product_order (order_id, user_id, total_amount, status)
        VALUES (${order.order_id}, ${order.user_id}, ${order.total_amount}, ${order.status})
        ON CONFLICT (order_id) DO NOTHING
      `;
    })
  );
  return insertIntoOrder;
};

const CreateOrderItemTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS ordered_items (
      ordered_item_id SERIAL PRIMARY KEY,
      order_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      quantity INTEGER NOT NULL,
      price_at_purchase NUMERIC(10,2) NOT NULL,
      FOREIGN KEY(order_id) REFERENCES product_order(order_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    )
  `;

  const InsertOrderedItems = await Promise.all(
    OrderedItems.map(async (item) => {
      return sql`
        INSERT INTO ordered_items (order_id, product_id, quantity, price_at_purchase)
        VALUES (${item.order_id}, ${item.product_id}, ${item.quantity}, ${item.price_at_purchase})
        ON CONFLICT (ordered_item_id) DO NOTHING
      `;
    })
  );
  return InsertOrderedItems;
};

const CreateProductTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      product_id SERIAL PRIMARY KEY,
      description TEXT NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      quantity INTEGER NOT NULL,
      category_id INTEGER NOT NULL,
      product_name VARCHAR(150) NOT NULL,
      product_owner VARCHAR(50) NOT NULL,
      image TEXT NOT NULL,
      ratings NUMERIC(10, 2) NOT NULL,
      added_at TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY(category_id) REFERENCES product_category(category_id)
    );
  `;

  const InsertProducts = await Promise.all(
    Products.map(async (product) => {
      return sql`
        INSERT INTO products (description, price, quantity, category_id, product_name, product_owner, image, ratings)
        VALUES (
          ${product.description},
          ${product.price},
          ${product.quantity},
          ${product.category_id},
          ${product.product_name},
          ${product.product_owner},
          ${product.image?.src}, 
          ${product.ratings}
        )
        ON CONFLICT (product_id) DO NOTHING
      `;
    })
  );

  return InsertProducts;
};

const CreateMessagesTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS messages (
      message_id SERIAL PRIMARY KEY,
      sender_id UUID NOT NULL,
      receiver_id UUID NOT NULL,
      content TEXT NOT NULL,
      added_at TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY(sender_id) REFERENCES users(user_id),
      FOREIGN KEY(receiver_id) REFERENCES users(user_id)
    )
  `;

  const InsertMessages = await Promise.all(
    Messages.map(async (message) => {
      return sql`
        INSERT INTO messages (message_id, sender_id, receiver_id, content)
        VALUES (${message.message_id}, ${message.sender_id}, ${message.receiver_id}, ${message.content})
        ON CONFLICT (message_id) DO NOTHING
      `;
    })
  );
  return InsertMessages;
};

export async function GET() {
  try {
    await sql.begin(async (sql) => {
      await CreateUserTable();
      await CreateProductCategoriesTable();
      await CreateProductTable();
      await CreateOrderTable();
      await CreateOrderItemTable();
      await CreateMessagesTable();
    });

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error("Seeding Error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
