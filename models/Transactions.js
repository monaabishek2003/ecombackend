import mongoose from 'mongoose';

const { Schema } = mongoose;

const TransactionsSchema = new Schema({
    payment_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    transaction_status: {
        type: String,
        required: true,
        enum: ['Pending', 'Completed', 'Failed'] // Example statuses
    }
});

const Transactions = mongoose.model('Transactions', TransactionsSchema);

export default Transactions;
