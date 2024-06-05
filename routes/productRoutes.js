import express from 'express';
import { createProduct,getProducts,updateProduct,searchProducts, filterProducts } from '../controllers/productController.js';
import authMiddleware from '../middleware/auth.js';
const router = express.Router();

router.get('/',getProducts);
router.get('/search',searchProducts)
router.post('/add', createProduct)
router.post('/filter',filterProducts)
router.patch('/:id',authMiddleware,updateProduct)
export default router;

