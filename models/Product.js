import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    name: { type: String, required: true },
    descriptive_name: { type: String },
    brand: { type: String },
    UPIN: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    available_offers: { type: String },
    detailed_description: { type: String },
    ratings: { type: Number, min: 0, max: 5 },
    manufacturer: { type: String },
    quantity: { type: Number, required: true },
    category_id: { type: String, required: true },
    specifications: [
      {
        specification_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Specification', required: true },
        value: { type: String, required: true }
      }
    ]
  });
  
const Product = mongoose.model('Product', ProductSchema);
export default Product;