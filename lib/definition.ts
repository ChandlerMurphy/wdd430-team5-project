import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface ProductData {
  id: Number;
  image: {
    alt: string;
    src: string;
  };
  quantity: number;
  category_id: string;
  productOwner: string;
  productName: string;
  price: number;
  ratings: number;
}

//user type
export enum UserType {
  Artisan = "artisans",
  Customer = "customer",
  Admin = "admin",
}

export interface UserTable {
  user_id: number;
  name: string;
  email: string;
  password: string;
  user_type: UserType;
  profile_picture: File;
  bio: string;
  created_at: Timestamp;
}

//shipping status for Order
enum shippingStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
}

export interface Order {
  order_id: number;
  user_id: number;
  total_amount: number;
  status: shippingStatus;
  order_date: Timestamp;
}

export interface OrderedItem {
  order_item_id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_at_purchase: number;
}

export interface Reviews {
  review_id: string;
  user_id: string;
  product_id: string;
  rating: number;
  comment: string;
  created_at: Timestamp;
}

//categories data specification
export interface Category {
  category_id: string;
  category_name: CategoryType;
  category_description: string;
}

export enum CategoryType {
  Fashion = "fashion",
  Electronics = "electronics",
  Furniture = "furniture",
  Books = "books",
  Services = "services",
}

export interface Messages {
  message_id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  timestamp: Timestamp;
}
