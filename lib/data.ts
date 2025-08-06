import postgres from 'postgres';
import { Category, ProductData, Reviews } from './definition';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchProductById(id: string): Promise<ProductData | null> {
  try {
    const data = await sql<ProductData[]>`
        SELECT
            product_id,
            description,
            price,
            quantity,
            category_id,
            product_owner,
            product_name,
            image,
            ratings
        FROM products
        WHERE product_id = ${id};
    `;

    return data.at(0) ?? null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product.');
  }
}

export async function fetchReviewsByProductId(id: string): Promise<Reviews[]> {
  try {
    const reviews = await sql<Reviews[]>`
      SELECT review_id, user_name, product_id, rating, comment, created_at
      FROM reviews
      WHERE product_id = ${id}
      ORDER BY created_at DESC;
    `;
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw new Error('Failed to fetch reviews.');
  }
}

export async function fetchCategories(): Promise<Category[]> {
  const result = await sql<Category[]>`
    SELECT * FROM product_category
    ORDER BY category_name;
  `;
  return result;
}

export async function fetchProductByCategoryId(category_id: number): Promise<ProductData[]> {
  const result = await sql<ProductData[]>`
    SELECT * FROM products
    WHERE category_id = ${category_id};
  `;
  return result
}