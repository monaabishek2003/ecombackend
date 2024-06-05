import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
  supplier_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
  // Add other fields as needed
});

const Supplier = mongoose.model('Supplier', SupplierSchema);
export default Supplier;
