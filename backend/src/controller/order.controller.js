import orderInfo from "../models/order.model.js";

// Function to display a list of all the products in the database
export function orderList(req,res) {
    orderInfo.find()
    .then(items => {res.json(items);})
    .catch(err => {
        res.status(400).json(`Error:${err}`);
    })
};

//Function to search for a specific product
export async function searchOrder (req,res){
    const name = (req.params.name);
    try{
        const order = await orderInfo.findOne({name : name});
        if (order){
            res.status(200).json(order);
        } else {
            res.status(404).json({message:"Order not found."});
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

//**** Function to add a Product into the database
export async function addOrder(req,res) {

    try{
        const newOrder =  new orderInfo(req.body);
        await newOrder.save();
        return res.status(201).json({message:"Order added Successfully"});
    }

    catch(err){
        return res.status(500).json({message: err.message});
    }
};

// Function to update the Product Quantity
export async function updateOrder(req,res) {
    const name = req.params.name;
    const updates = req.body;
    try{
        const updatedOrder = await orderInfo.findOneAndUpdate({name: name}, updates, {new: true});

        if(updatedOrder){
            return res.status(200).json(updatedOrder);
        } else {
            return res.status(404).json({message: "Order not found"});
        }
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
} ;

// Function to delete a Product from database
export async function deleteOrder(req, res){
    const name = req.params.name;
    try {
        const deleteOrder = await orderInfo.findOneAndDelete({ name: name });

        if (deleteOrder) {
            return res.status(200).json(deleteOrder);
        }else {
            return res.status(404).json({message:"Order not Found"});
        }
    }
    catch (err){
        return res.status(500).json({message: err.message});
    }
};