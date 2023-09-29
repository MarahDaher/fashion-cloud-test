import { Router } from "express";
import { getAllProducts } from "../controllers/ProductsController";

const router = Router();

// Products Route
router.get("/products", getAllProducts);

export default router;
