import { CategoryType, Category } from "./definition";

export const Users = [
  {
    user_id: 101,
    name: "Alice Wonderland",
    email: "alice.w@example.com",
    password: "hashedpassword1", // In a real system, this would be a hashed password, not plain text.
    user_type: "standard_user",
    profile_picture: "https://example.com/profiles/alice_w.jpg",
    bio: "Passionate about software development and open-source contributions. Enjoys hiking and reading.",
  },
  {
    user_id: 102,
    name: "Bob Thebuilder",
    email: "bob.b@example.com",
    password: "hashedpassword2",
    user_type: "admin",
    profile_picture: "https://example.com/profiles/bob_b.png",
    bio: "Administrator with a focus on system security and infrastructure. Loves building LEGOs in spare time.",
  },
  {
    user_id: 103,
    name: "Charlie Chaplin",
    email: "charlie.c@example.com",
    password: "hashedpassword3",
    user_type: "content_creator",
    profile_picture: "https://example.com/profiles/charlie_c.webp",
    bio: "Multimedia expert, creating engaging content for various platforms. Always learning new video editing techniques.",
  },
  {
    user_id: 104,
    name: "Diana Prince",
    email: "diana.p@example.com",
    password: "hashedpassword4",
    user_type: "moderator",
    profile_picture: "https://example.com/profiles/diana_p.jpeg",
    bio: "Community moderator dedicated to fostering a positive and safe online environment. Enjoys gardening.",
    created_at: "2023-09-10T11:45:00Z",
  },
  {
    user_id: 105,
    name: "Eve Harrington",
    email: "eve.h@example.com",
    password: "hashedpassword5",
    user_type: "standard_user",
    profile_picture: "https://example.com/profiles/eve_h.gif",
    bio: "New to the platform, eager to explore and connect. Currently studying web development.",
  },
];

const PredefinedCategories: Record<CategoryType, Category> = {
  fashion: {
    category_id: "1",
    category_name: CategoryType.Fashion,
    category_description: "Clothing and accessories",
  },
  electronics: {
    category_id: "2",
    category_name: CategoryType.Electronics,
    category_description: "Gadgets and devices",
  },
  furniture: {
    category_id: "3",
    category_name: CategoryType.Furniture,
    category_description: "Home and office furniture",
  },
  books: {
    category_id: "4",
    category_name: CategoryType.Books,
    category_description: "Books and literature",
  },
  services: {
    category_id: "5",
    category_name: CategoryType.Services,
    category_description: "Professional services",
  },
};

export const PredefinedCategoriesData: Category[] =
  Object.values(PredefinedCategories);

export const Orders = [
  {
    order_id: 3001,
    user_id: 101, // Assuming this user ID exists from your 'users' blueprint
    total_amount: 155.49,
    status: "delivered",
  },
  {
    order_id: 3002,
    user_id: 105,
    total_amount: 25.5,
    status: "pending",
  },
  {
    order_id: 3003,
    user_id: 102,
    total_amount: 300.99,
    status: "shipped",
  },
  {
    order_id: 3004,
    user_id: 101,
    total_amount: 89.95,
    status: "processing",
  },
  {
    order_id: 3005,
    user_id: 103,
    total_amount: 49.99,
    status: "cancelled",
  },
];

export const OrderedItems = [
  {
    order_item_id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    order_id: "3001",
    product_id: "2001",
    quantity: 1,
    price_at_purchase: 129.99,
  },
  {
    order_item_id: "b2c3d4e5-f6a7-8901-2345-67890abcdef0",
    order_id: "3001",
    product_id: "2002",
    quantity: 1,
    price_at_purchase: 249.0,
  },
  {
    order_item_id: "c3d4e5f6-a7b8-9012-3456-7890abcdef01",
    order_id: "3002",
    product_id: "2003",
    quantity: 2,
    price_at_purchase: 25.5,
  },
  {
    order_item_id: "d4e5f6a7-b8c9-0123-4567-890abcdef012",
    order_id: "3003",
    product_id: "2005",
    quantity: 3,
    price_at_purchase: 110.0,
  },
  {
    order_item_id: "e5f6a7b8-c9d0-1234-5678-90abcdef0123",
    order_id: "3004",
    product_id: "2004",
    quantity: 1,
    price_at_purchase: 89.95,
  },
];

export const Products = [
  {
    id: 3001,
    productName: "Handwoven Macrame Wall Hanging",
    image: {
      alt: "Cream macrame wall hanging on wooden dowel",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 45.0,
    quantity: 30,
    category_id: "21", // e.g., Home Decor
    productOwner: "Artisan Weaves Co",
    ratings: 4.7,
  },
  {
    id: 3002,
    productName: "Rustic Handmade Wooden Bowl",
    image: {
      alt: "Carved wooden bowl with natural grain pattern",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 32.5,
    quantity: 20,
    category_id: "22", // e.g., Kitchenware
    productOwner: "Wood Crafts By Leo",
    ratings: 4.9,
  },
  {
    id: 3003,
    productName: "Hand-Poured Soy Candle – Lavender Scent",
    image: {
      alt: "Lavender soy candle in glass jar with dried flowers",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 18.0,
    quantity: 100,
    category_id: "23", // e.g., Home Fragrance
    productOwner: "The Candle Nest",
    ratings: 4.6,
  },
  {
    id: 3004,
    productName: "Crocheted Cotton Coasters (Set of 4)",
    image: {
      alt: "Beige crocheted coasters on wooden table",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 15.0,
    quantity: 80,
    category_id: "24", // e.g., Handmade Accessories
    productOwner: "Loops And Knots",
    ratings: 4.5,
  },
  {
    id: 3005,
    productName: "Hand-Stitched Leather Journal",
    image: {
      alt: "Brown leather journal with hand-sewn binding",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 38.0,
    quantity: 50,
    category_id: "25", // e.g., Stationery
    productOwner: "InkAndHide",
    ratings: 4.8,
  },
];

export const Messages = [
  {
    message_id: "msg-a1b2c3d4-e5f6-7890-1234-567890abcdef",
    sender_id: 101, // Using numeric user_id
    receiver_id: 102, // Using numeric user_id
    content:
      "Hi Bob, I had a question about the new feature rollout. Can we sync up next week?",
    timestamp: "2025-07-26T19:05:00Z",
  },
  {
    message_id: "msg-b2c3d4e5-f6a7-8901-2345-67890abcdef0",
    sender_id: 102,
    receiver_id: 101,
    content:
      "Sure Alice, how about Tuesday at 10 AM GMT? I'll send a calendar invite.",
    timestamp: "2025-07-26T19:10:30Z",
  },
  {
    message_id: "msg-c3d4e5f6-a7b8-9012-3456-7890abcdef01",
    sender_id: 105,
    receiver_id: 104,
    content:
      "Hey Diana, I noticed a typo on the product description for the ceramic mug. Just wanted to let you know!",
    timestamp: "2025-07-25T15:00:00Z",
  },
  {
    message_id: "msg-d4e5f6a7-b8c9-0123-4567-890abcdef012",
    sender_id: 104,
    receiver_id: 105,
    content:
      "Thanks for catching that, Eve! I've already corrected it. Appreciate your vigilance.",
    timestamp: "2025-07-25T15:10:00Z",
  },
  {
    message_id: "msg-e5f6a7b8-c9d0-1234-5678-90abcdef0123",
    sender_id: 103,
    receiver_id: 101,
    content:
      "Alice, how's the progress on the new video project? Need any help with the scripting?",
    timestamp: "2025-07-26T10:45:00Z",
  },
];

export const heroData = [
  {
    title: "Discover Unique Handcrafted Treasures",
    description:
      "Shop one-of-a-kind items made with love by talented artisans. Find the perfect gift or treat yourself to something special!",
    cta: {
      label: "Browse Collection",
      href: "/browse",
    },
    featuredItems: {
      label: "Browse latest art piece",
      href: "/new",
    },
  },
];
