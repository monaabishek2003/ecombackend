import ChatMessage from '../models/ChatMessage.js';

// Controller to send a message
export const sendMessage = async (req, res) => {
  try {
    const { sender, recipient, senderModel, recipientModel, message } = req.body;

    const newMessage = new ChatMessage({
      sender,
      recipient,
      senderModel,
      recipientModel,
      message
    });

    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully', data: newMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending message', error: error.message });
  }
};

// Controller to get chat history between two users
export const getChatHistory = async (req, res) => {
  try {
    const { sender, recipient } = req.query;

    const messages = await ChatMessage.find({
      $or: [
        { sender, recipient },
        { sender: recipient, recipient: sender }
      ]
    }).sort({ timestamp: 1 });

    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status (500).json({ success: false, message: 'Error fetching chat history', error: error.message });
  }
};
