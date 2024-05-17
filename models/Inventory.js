import mongoose from 'mongoose';

const { Schema } = mongoose;

const InventorySchema = new Schema({
    product_id: {
        type: String,
        required: true,
        unique: true
    },
    product_category: {
        type: String,
        required: true
    },
    warehouse_code: {
        type: String,
        required: true
    },
    available_quantity: {
        type: Number,
        required: true
    },
    seller: {
        type: String,
        required: true
    }
});

const Inventory = mongoose.model('Inventory', InventorySchema);

export default Inventory;
