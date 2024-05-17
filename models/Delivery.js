import mongoose from "mongoose";
const { Schema } = mongoose;

const DeliverySchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    unique_order_id: {
        type: Number,
        required: true,
        unique: true
    },
    deliveryproduct_id: {
        type: Schema.Types.ObjectId,
        ref: 'DeliveryProduct',
        required: true
    },
    invoice_file: {
        type: String,
        required: true
    }
});

const Delivery = mongoose.model('Delivery', DeliverySchema);
export default Delivery;