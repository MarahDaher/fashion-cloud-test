import { NextFunction, Request, Response } from "express";
import ErrorResponseException from "../exceptions/ErrorResponseException";
import ProductService from "./../services/ProductsService";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await ProductService.getAllProducts(req.query);

    res.status(200).json({
      status: "success",
      result: results.length,
      data: results,
    });
  } catch (error) {
    next(new ErrorResponseException(error));
  }
};
