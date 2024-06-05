import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  User_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);
export default User;