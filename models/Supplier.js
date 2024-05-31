import mongoose from "mongoose";


const SupplierSchema = new mongoose.Schema({
  supplier_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true }
});

const Supplier = mongoose.model('Supplier', SupplierSchema);
export default Supplier;