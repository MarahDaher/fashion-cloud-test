import { Model } from "mongoose";
import Products, { IProduct } from "../model/ProductModel";
import APIFeatures from "../utils/APIFeatures";

class ProductRepository {
  private model: Model<IProduct>;

  constructor(model: Model<IProduct>) {
    this.model = model;
  }

  async getAll(queryString: any) {
    const query = this.model.find();
    const features = new APIFeatures(query, queryString)
      .filter()
      .sort("-stock");
    return features.getQuery().exec();
  }
}

export default new ProductRepository(Products);
