import express from 'express';
import { registerSupplier, loginSupplier } from '../controllers/supplierController.js';

const router = express.Router();

router.post('/register', registerSupplier);
router.post('/login', loginSupplier);

export default router;
