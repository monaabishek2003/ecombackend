// routes.js
import express from 'express';
import { addSpecification, getSpecificationsByCategory } from '../controllers/specificationController.js';

const router = express.Router();

// Define routes
router.post('/add', addSpecification);
router.get('/:categoryId', getSpecificationsByCategory);

export default router;
