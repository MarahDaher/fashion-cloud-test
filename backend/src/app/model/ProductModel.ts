import mongoose, { Document, Model } from "mongoose";

// Define the schema
interface IProduct extends Document {
  gtin: number;
  name: string;
  image?: string;
  brand: string;
  category: string;
  color: string;
  stock: number;
  price: number;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    gtin: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Products: Model<IProduct> = mongoose.model<IProduct>(
  "products",
  ProductSchema
);

export default Products;
