import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    pid : {
        type:Number,
        required: [true, "Please Provide a Product ID"],
        unique: [true, "Product ID already Exist"]
    },
    category:{
        type:String,
        required:[true],
        unique:false
    },
    brand: {
        type:String,
    },
    name:{
        type: String,
        required: [true,"Please Provide Product Name"]
    }
    

})