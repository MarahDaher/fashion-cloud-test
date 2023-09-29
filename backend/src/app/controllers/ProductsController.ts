import APIFeatures from "./../utils/APIFeatures";
import Products from "./../model/ProductModel";
import { NextFunction, Request, Response } from "express";
import ErrorResponseException from "../exceptions/ErrorResponseException";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = Products.find();

    const features = new APIFeatures(query, req.query).filter().sort("stock");
    const results = await features.getQuery().exec();

    res.status(200).json({
      status: "success",
      result: results.length,
      data: results,
    });
  } catch (error) {
    next(new ErrorResponseException(error));
  }
};
