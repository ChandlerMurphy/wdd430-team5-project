import { CategoryType, Category } from "./definition";

export const Users = [
  {
    user_id: "2f5eebc7-1fc4-4c38-8d2d-7d6c405fea01",
    name: "Alice Wonderland",
    email: "alice.w@example.com",
    password: "hashedpassword1",
    user_type: "customer",
    profile_picture:
      "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg",
    bio: "Passionate about software development and open-source contributions. Enjoys hiking and reading.",
  },
  {
    user_id: "b26adf75-f3d9-4696-bdd3-041dbd3ae7be",
    name: "Bob Thebuilder",
    email: "bob.b@example.com",
    password: "hashedpassword2",
    user_type: "admin",
    profile_picture:
      "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg",
    bio: "Administrator with a focus on system security and infrastructure. Loves building LEGOs in spare time.",
  },
  {
    user_id: "96aa1d62-1956-4967-b0de-ff1d4fc1b54c",
    name: "Charlie Chaplin",
    email: "charlie.c@example.com",
    password: "hashedpassword3",
    user_type: "customer",
    profile_picture:
      "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg",
    bio: "Multimedia expert, creating engaging content for various platforms. Always learning new video editing techniques.",
  },
  {
    user_id: "ad62475e-5e45-4311-a5c6-bbb1d8993428",
    name: "Diana Prince",
    email: "diana.p@example.com",
    password: "hashedpassword4",
    user_type: "customer",
    profile_picture:
      "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg",
    bio: "Community moderator dedicated to fostering a positive and safe online environment. Enjoys gardening.",
    created_at: "2023-09-10T11:45:00Z",
  },
  {
    user_id: "dd1121ec-3dd7-4c6f-9b49-1fc1bb432292",
    name: "Eve Harrington",
    email: "eve.h@example.com",
    password: "hashedpassword5",
    user_type: "customer",
    profile_picture:
      "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg",
    bio: "New to the platform, eager to explore and connect. Currently studying web development.",
  },
];

export const PredefinedCategories: Record<CategoryType, Category> = {
  textiles: {
    category_id: 1,
    category_name: CategoryType.Textiles,
    category_description: "Handwoven and textile crafts",
  },
  woodwork: {
    category_id: 2,
    category_name: CategoryType.Woodwork,
    category_description: "Handcrafted wooden items",
  },
  candles: {
    category_id: 3,
    category_name: CategoryType.Candles,
    category_description: "Hand-poured and scented candles",
  },
  accessories: {
    category_id: 4,
    category_name: CategoryType.Accessories,
    category_description: "Handmade accessories and coasters",
  },
  stationery: {
    category_id: 5,
    category_name: CategoryType.Stationery,
    category_description: "Hand-stitched journals and stationery",
  },
};

export const PredefinedCategoriesData: Category[] =
  Object.values(PredefinedCategories);

export const Orders = [
  {
    order_id: 3001,
    user_id: "2f5eebc7-1fc4-4c38-8d2d-7d6c405fea01",
    total_amount: 155.49,
    status: "delivered",
  },
  {
    order_id: 3002,
    user_id: "2f5eebc7-1fc4-4c38-8d2d-7d6c405fea01",
    total_amount: 25.5,
    status: "pending",
  },
  {
    order_id: 3003,
    user_id: "96aa1d62-1956-4967-b0de-ff1d4fc1b54c",
    total_amount: 300.99,
    status: "shipped",
  },
  {
    order_id: 3004,
    user_id: "dd1121ec-3dd7-4c6f-9b49-1fc1bb432292",
    total_amount: 89.95,
    status: "pending",
  },
  {
    order_id: 3005,
    user_id: "96aa1d62-1956-4967-b0de-ff1d4fc1b54c",
    total_amount: 49.99,
    status: "pending",
  },
];

export const OrderedItems = [
  {
    order_item_id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    order_id: 3001,
    product_id: 1,
    quantity: 1,
    price_at_purchase: 129.99,
  },
  {
    order_item_id: "b2c3d4e5-f6a7-8901-2345-67890abcdef0",
    order_id: 3005,
    product_id: 1,
    quantity: 1,
    price_at_purchase: 249.0,
  },
  {
    order_item_id: "c3d4e5f6-a7b8-9012-3456-7890abcdef01",
    order_id: 3002,
    product_id: 1,
    quantity: 2,
    price_at_purchase: 25.5,
  },
  {
    order_item_id: "d4e5f6a7-b8c9-0123-4567-890abcdef012",
    order_id: 3003,
    product_id: 2,
    quantity: 3,
    price_at_purchase: 110.0,
  },
  {
    order_item_id: "e5f6a7b8-c9d0-1234-5678-90abcdef0123",
    order_id: 3004,
    product_id: 2,
    quantity: 1,
    price_at_purchase: 89.95,
  },
];

export const Products = [
  {
    product_name: "Handwoven Macrame Wall Hanging",
    image: {
      alt: "Cream macrame wall hanging on wooden dowel",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 45.0,
    quantity: 30,
    description:
      "This handwoven macrame wall hanging adds a cozy bohemian charm to any space. Crafted with 100% cotton cord and suspended from a smooth wooden dowel, it's perfect for bedrooms, living rooms, or creative corners.",
    category_id: 1, // Textiles
    product_owner: "Artisan Weaves Co",
    ratings: 4.7,
  },
  {
    product_name: "Rustic Handmade Wooden Bowl",
    image: {
      alt: "Carved wooden bowl with natural grain pattern",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 32.5,
    quantity: 20,
    description:
      "Expertly carved from sustainably sourced wood, this rustic bowl showcases the natural grain of the material. Ideal for serving snacks, holding keys, or adding a warm organic touch to your table.",
    category_id: 2, // Woodwork
    product_owner: "Wood Crafts By Leo",
    ratings: 4.9,
  },
  {
    product_name: "Hand-Poured Soy Candle – Lavender Scent",
    image: {
      alt: "Lavender soy candle in glass jar with dried flowers",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 18.0,
    quantity: 100,
    description:
      "Relax and unwind with the calming aroma of this hand-poured soy candle. Infused with pure lavender essential oil and presented in a recyclable glass jar, it's a soothing addition to any room.",
    category_id: 3, // Candles
    product_owner: "The Candle Nest",
    ratings: 4.6,
  },
  {
    product_name: "Crocheted Cotton Coasters (Set of 4)",
    image: {
      alt: "Beige crocheted coasters on wooden table",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 15.0,
    quantity: 80,
    description:
      "Protect your surfaces with these handmade cotton coasters. Soft yet durable, this set of four features neutral tones and a textured crochet pattern that complements any decor style.",
    category_id: 4, // Accessories
    product_owner: "Loops And Knots",
    ratings: 4.5,
  },
  {
    product_name: "Hand-Stitched Leather Journal",
    image: {
      alt: "Brown leather journal with hand-sewn binding",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4935oZkz0b9ORKSLlbtJeS_AXpemEiOCdcA&s",
    },
    price: 38.0,
    quantity: 50,
    description:
      "Capture your thoughts, sketches, or memories in this handcrafted leather journal. Made with genuine leather and stitched by hand, it features high-quality paper ideal for writing or drawing.",
    category_id: 5, // Stationery
    product_owner: "Ink And Hide",
    ratings: 4.8,
  },
];

export const Messages = [
  {
    message_id: 1,
    sender_id: "dd1121ec-3dd7-4c6f-9b49-1fc1bb432292",
    receiver_id: "2f5eebc7-1fc4-4c38-8d2d-7d6c405fea01",
    content:
      "Hi Bob, I had a question about the new feature rollout. Can we sync up next week?",
    timestamp: "2025-07-26T19:05:00Z",
  },
  {
    message_id: 2,
    sender_id: "b26adf75-f3d9-4696-bdd3-041dbd3ae7be",
    receiver_id: "dd1121ec-3dd7-4c6f-9b49-1fc1bb432292",
    content:
      "Sure Alice, how about Tuesday at 10 AM GMT? I'll send a calendar invite.",
    timestamp: "2025-07-26T19:10:30Z",
  },
  {
    message_id: 3,
    sender_id: "2f5eebc7-1fc4-4c38-8d2d-7d6c405fea01",
    receiver_id: "2f5eebc7-1fc4-4c38-8d2d-7d6c405fea01",
    content:
      "Hey Diana, I noticed a typo on the product description for the ceramic mug. Just wanted to let you know!",
    timestamp: "2025-07-25T15:00:00Z",
  },
  {
    message_id: 5,
    sender_id: "2f5eebc7-1fc4-4c38-8d2d-7d6c405fea01",
    receiver_id: "ad62475e-5e45-4311-a5c6-bbb1d8993428",
    content:
      "Thanks for catching that, Eve! I've already corrected it. Appreciate your vigilance.",
    timestamp: "2025-07-25T15:10:00Z",
  },
  {
    message_id: 6,
    sender_id: "ad62475e-5e45-4311-a5c6-bbb1d8993428",
    receiver_id: "b26adf75-f3d9-4696-bdd3-041dbd3ae7be",
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
