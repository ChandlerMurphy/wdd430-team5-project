import postgres from "postgres";
import { ProductData } from "lib/definition";
const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

export const featureditemsData = async () => {
  try {
    const data = await sql<
      ProductData[]
    >`SELECT * FROM products ORDER BY added_at DESC LIMIT 5`;
    return data;
  } catch (err) {
    console.error(err);
  }
};
