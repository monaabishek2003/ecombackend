import mongoose from 'mongoose';

const { Schema } = mongoose;

const DeliveryProductSchema = new Schema({
    product_id: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    vendor_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Vendor'
    },
    transaction_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Transactions'
    },
});

const DeliveryProduct = mongoose.model('DeliveryProduct', DeliveryProductSchema);

export default DeliveryProduct;
