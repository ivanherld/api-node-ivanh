import { Router } from "express";

const router = Router();


import { 
    getAllProducts, 
    searchProducts, 
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct 
} from "../controllers/products.controller.js";


router.get("/products", getAllProducts);

router.get('/products/search', searchProducts);

router.get("/products/:id", getProductById);

router.post("/products", createProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct);


export default router;