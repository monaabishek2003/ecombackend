import express from 'express';
import { getCategories, addNewCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/add', addNewCategory);

export default router;
