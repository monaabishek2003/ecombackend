import express from 'express';
import { sendMessage, getChatHistory } from '../controllers/chatController.js';

const router = express.Router();

// Route to send a message
router.post('/send', sendMessage);

// Route to get chat history
router.get('/history', getChatHistory);

export default router;
