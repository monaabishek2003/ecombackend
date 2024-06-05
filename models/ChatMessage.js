import mongoose from 'mongoose';

const { Schema } = mongoose;

const ChatMessageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, refPath: 'senderModel', required: true },
  recipient: { type: Schema.Types.ObjectId, refPath: 'recipientModel', required: true },
  senderModel: { type: String, required: true, enum: ['User', 'Supplier'] },
  recipientModel: { type: String, required: true, enum: ['User', 'Supplier'] },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema);
export default ChatMessage;
