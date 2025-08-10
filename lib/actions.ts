"use server";
import { z } from "zod";
import { writeFile } from "fs/promises";
import { join } from "path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import bcrypt from "bcrypt";

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

//user signup form data validation decalration
export type SignUpState = {
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
    user_type?: string[];
    profile_picture?: string[];
    bio?: string[];
  };
  message?: string | null;
};

const signUpSchema = z.object({
  name: z.string().min(3, "Please enter an appropriate name"),
  email: z.string().email("Please enter a valid email address"),
  password: z.coerce
    .string()
    .min(6, "Password must be at least six characters"),
  user_type: z.string().nonempty("User Type is required"),
  profile_picture: z
    .string()
    .nonempty("Profile picture is required")
    .optional(),
  bio: z.string().min(10, "Please enter an appropriate bio"),
});

export async function addUser(
  prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  const file = formData.get("profile_picture") as File | null;

  const plainData = Object.fromEntries(
    Array.from(formData.entries()).filter(([key]) => key !== "profile_picture")
  );

  const validatedData = signUpSchema.safeParse(plainData);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: null,
    };
  }

  const { name, email, password, user_type, bio } = validatedData.data;
  const hashed_password = await bcrypt.hash(password, 12);

  let profilePicturePath: string | null = null;

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${file.name}`;
    const filepath = join(process.cwd(), "public", "uploads", filename);

    await writeFile(filepath, buffer);
    profilePicturePath = `/uploads/${filename}`;
  }

  try {
    // ✅ Check if email already exists
    const existing = await sql`
      SELECT user_id FROM users WHERE email = ${email} LIMIT 1
    `;

    if (existing.length > 0) {
      return {
        errors: { email: ["This email is already registered"] },
        message: null,
      };
    }

    await sql`
      INSERT INTO users (name, email, password, user_type, profile_picture, bio)
      VALUES (${name}, ${email}, ${hashed_password}, ${user_type}, ${profilePicturePath}, ${bio})
    `;

    return {
      errors: {},
      message: "User created successfully Redirecting...",
    };
  } catch (error) {
    console.error("User inserting error", error);
    return {
      errors: { email: ["Something went wrong while creating your account"] },
      message: null,
    };
  }
}
