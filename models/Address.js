import mongoose from "mongoose";
const { Schema } = mongoose;

const AddressSchema = new mongoose.Schema(
    {
        User_id : { 
            type : Schema.Types.ObjectId, 
            ref : 'User',
            required : true
        },
        Name : {
            type : String,
            required : true
        },
        contact_no : { 
            type : Number,
            required : true
        },
        PIN_CODE : {
            type : Number,
            required : true
        },
        State : {
            type : String,
            required : true
        },
        City : {
            type : String,
            required : true
        },
        Address_line_1 : {
            type : String,
            required : true
        },
        Address_line_2 : {
            type : String,
            required : true
        },
        landmark : {
            type : String,
            required : true
        },
    }
)


const Address = mongoose.model(AddressSchema)
export default Address;