import express from 'express';
import { createProduct,getProducts,updateProduct,searchProducts, filterProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/',getProducts);
router.get('/search',searchProducts)
router.post('/add', createProduct)
router.post('/filter',filterProducts)
router.patch('/:id',updateProduct)
export default router;

