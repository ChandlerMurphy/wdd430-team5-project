export interface ProductDetails {
  id:Number
  image: {
    alt: string;
    src: string;
  };
  productOwner: string;
  productName: string;
  price: number;
  ratings: number;
}

export type ProductData = ProductDetails[];
