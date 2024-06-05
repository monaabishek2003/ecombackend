import express from 'express';
import { postQuery, respondToQuery, getQueries } from '../controllers/queryController.js';

const router = express.Router();

// Route to post a new query
router.post('/', postQuery);

// Route to respond to a query
router.post('/respond', respondToQuery);

// Route to get all queries (optionally filtered by product and supplier)
router.get('/', getQueries);


export default router;
