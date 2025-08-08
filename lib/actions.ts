"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
//sellformData validation
export type ErrorState = {
  errors: {
    product_name?: string[];
    image?: string[];
    price?: string[];
    quantity?: string[];
    description?: string[];
    rating?: string[];
    product_owner?: string[];
    category_id?: string[];
  };
  message?: string | null;
};

//validation with zod
const SellFormSchema = z.object({
  product_name: z.string().min(1, "Product Name is required"),
  image: z.string().min(1, "Image is required"),
  price: z.coerce.number().gt(0, { message: "Price must be greater than 0" }),
  quantity: z.coerce
    .number()
    .min(1, { message: "Quantity must be greater than 0" })
    .max(1000000, { message: "Quantity must be less than 1,000,000" }),
  description: z.string().min(1, "Description is required"),
  ratings: z.coerce
    .number()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be 5 or less" }),
  product_owner: z.string().min(1, "Product Owner is required"),
  category_id: z.coerce.number({ message: "Please select a category" }),
});

//insert data to database form the product form
export async function sellProductData(
  prevState: ErrorState,
  formData: FormData
) {
  const data = Object.fromEntries(formData);
  const result = SellFormSchema.safeParse(data);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }
  const {
    product_name,
    image,
    price,
    quantity,
    description,
    ratings,
    product_owner,
    category_id,
  } = result.data;

  try {
    await sql`INSERT INTO products (product_name, image, price, quantity, description, ratings, product_owner, category_id)
     VALUES (${product_name}, ${image}, ${price}, ${quantity}, ${description}, ${ratings}, ${product_owner}, ${category_id})`;
  } catch (error) {
    console.error(error);
    return { errors: { product_name: ["Failed to add product"] } };
  }
  revalidatePath("/products");
  redirect("/products");
}


