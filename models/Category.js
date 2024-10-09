import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    parent_category: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
    sub_categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    child_categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    category_id: { type: String }
});
const Category = mongoose.model('Category', CategorySchema);
export default Category;