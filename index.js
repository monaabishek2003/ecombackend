import mongoose from 'mongoose';
import User from './models/User.js';
import Address from './models/Address.js';
import DeliveryProduct from './models/DeliveryProduct.js';
import Transactions from './models/Transactions.js';
import Vendor from './models/Vendor.js';
import Inventory from './models/Inventory.js';
import Delivery from './models/Delivery.js';
const express = require('express');


const app = express();
const port =  3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// mongoose.connect('mongodb://localhost:27017/ecom', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// async function createExampleData() {
//     const newAddress = new Address({
//         User_id: new mongoose.Types.ObjectId(),
//         Name: 'John Doe',
//         contact_no: 1234567890,
//         PIN_CODE: 123456,
//         State: 'StateName',
//         City: 'CityName',
//         Address_line_1: '123 Main St',
//         Address_line_2: 'Apt 4B',
//         landmark: 'Near Park'
//     });

//     const savedAddress = await newAddress.save();

//     const newTransaction = new Transactions({
//         payment_id: new mongoose.Types.ObjectId(),
//         transaction_status: 'Pending'
//     });

//     const savedTransaction = await newTransaction.save();

//     const newVendor = new Vendor({
//         Vendor_Name: 'ABC Supplies',
//         deliverable_PINCODE: ['123456'],
//         warehouse_codes: ['WH001', 'WH002'],
//         Delivery_Date: new Date('2024-07-21'),
//         Delivery_Status: 'Pending'
//     });

//     const savedVendor = await newVendor.save();

//     const newDeliveryProduct = new DeliveryProduct({
//         product_id: 'P1001',
//         quantity: 50,
//         seller: 'Seller1',
//         vendor_id: savedVendor._id,
//         transaction_id: savedTransaction._id
//     });

//     const savedDeliveryProduct = await newDeliveryProduct.save();

//     const newUser = new User({
//         UserName: 'john_doe',
//         email: 'john@example.com',
//         password: 'securepassword',
//         contact_no: 9876543210,
//         address_ids: [savedAddress._id],
//         Orders_ids: []
//     });

//     const savedUser = await newUser.save();

//     const newInventory = new Inventory({
//         product_id: 'P1001',
//         product_category: 'Electronics',
//         warehouse_code: 'WH001',
//         available_quantity: 100,
//         seller: 'Seller1'
//     });

//     const savedInventory = await newInventory.save();

//     const newDelivery = new Delivery({
//         user_id: savedUser._id,
//         unique_order_id: 12345,
//         deliveryproduct_id: savedDeliveryProduct._id,
//         invoice_file: 'path/to/invoice/file'
//     });

//     await newDelivery.save();

//     console.log('Example data created successfully!');
// }

// createExampleData().catch(console.error);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});