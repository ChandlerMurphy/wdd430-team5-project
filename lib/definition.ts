import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface ProductData {
  product_id: number; 
  image: string;
  quantity: number;
  category_id: number;
  product_owner: string;
  product_name: string;
  description: string;
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
  user_id: string;
  name: string;
  email: string;
  password: string;
  user_type: UserType;
  profile_picture: File;
  bio: string;
  created_at: Timestamp;
}

//shipping status for Order
enum orderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
}

export interface Order {
  order_id: number;
  user_id: string;
  total_amount: number;
  status: orderStatus;
  order_date: Timestamp;
}

export interface OrderedItem {
  order_item_id: string;
  order_id: number;
  product_id: string;
  quantity: number;
  price_at_purchase: number;
}

export interface Reviews {
  review_id: string;
  user_name: string;
  product_id: string;
  rating: number;
  comment: string;
  created_at: Timestamp;
}

//categories data specification
export interface Category {
  category_id: number;
  category_name: CategoryType;
  category_description: string;
}

export enum CategoryType {
  Textiles = "textiles",
  Woodwork = "woodwork",
  Candles = "candles",
  Accessories = "accessories",
  Stationery = "stationery",
}

export interface Messages {
  message_id: number;
  sender_id: string;
  receiver_id: string;
  content: string;
  timestamp: Timestamp;
}
