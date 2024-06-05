import mongoose from 'mongoose';

const { Schema } = mongoose;

const QuerySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Product' }, // Optional, for product-specific queries
  query: { type: String, required: true },
  responses: [
    {
      supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' },
      response: { type: String },
      timestamp: { type: Date, default: Date.now }
    }
  ],
  timestamp: { type: Date, default: Date.now },
  supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' } // Optional, for supplier-specific queries
});

const Query = mongoose.model('Query', QuerySchema);
export default Query;
