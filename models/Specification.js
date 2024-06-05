import mongoose from "mongoose";

const SpecificationSchema = new mongoose.Schema({
    specification_name: { type: String, required: true },
    is_range: { type: Boolean, required: true },
    range: {
      low: { type: Number },
      high: { type: Number }
    },
    list_of_values: [String],
    category_id: { type: String, required: true }
});
  
const Specification = mongoose.model('Specification', SpecificationSchema);
export default Specification;