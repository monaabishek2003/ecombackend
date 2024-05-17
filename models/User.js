import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
    {
        UserName : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
            max : 50,
            unique : true,
        },
        password : {
            type : String,
            required : true,
            min : 5,
        },
        contact_no : {
            type : Number,
            required : true
        },
        address_ids :  [
            { 
                type: Schema.Types.ObjectId, 
                ref: 'Address' 
            }
        ],
        Orders_ids : [
            { 
                type: Schema.Types.ObjectId, 
                ref: 'Orders' 
            }
        ]
    }
)

const User = mongoose.model("User",UserSchema)
export default User