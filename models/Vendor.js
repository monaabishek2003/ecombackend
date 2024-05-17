const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Vendor Schema
const vendorSchema = new mongoose.Schema({
    Vendor_Name: {
        type: String,
        required: true
    },
    deliverable_PINCODE: [{
        type: String,
        required: true
    }],
    warehouse_codes: {
        type: [String], // Assuming warehouse codes are an array of strings
        required: true
    },
    Delivery_Date: {
        type: Date,
        required: true
    },
    Delivery_Status: {
        type: String,
        required: true,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'] // Example statuses
    }
});

// Create the Vendor Model
const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
