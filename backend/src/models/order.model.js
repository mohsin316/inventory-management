import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema({
    pid : {
        type:Number,
        required: [true, "Please Provide a Product ID"],
    },
    name:{
        type: String,
        required: [true,"Please Provide Product Name"]
    },
    quantity:{
        type: Number,
        required: true
    },
    cost:{
        type: Number,
        required: true
    } , 
    status:{
        type: String,
        required: true
    }  
},
{
    timestamp:true,
}
)

export default mongoose.model.orderInfo || mongoose.model('orderInfo',orderSchema)