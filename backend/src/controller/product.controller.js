import productInfo from "../models/product.model.js";

// Function to display a list of all the products in the database
export function productList(req,res) {
    productInfo.find()
    .then(items => {res.json(items);})
    .catch(err => {
        res.status(400).json(`Error:${err}`);
    })
};

//Function to search for a specific product
export async function searchProduct (req,res){
    const name = (req.params.name);
    try{
        const product = await productInfo.findOne({name : name});
        if (product){
            res.status(200).json(product);
        } else {
            res.status(404).json({message:"Product not found."});
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

//**** Function to add a Product into the database
export async function addProduct(req,res) {
    const {pid , name, brand, category, cost, stock} = req.body;

    try{
        const checkpid = await productInfo.findOne({pid: pid});
        if (checkpid){
            return res.status(400).json({message:"Product ID already Exists"});
        }

        const newProduct =  new productInfo(req.body);
        await newProduct.save();

        return res.status(201).json({message:"Product added Successfully"});
    }

    catch(err){
        return res.status(500).json({message: err.message});
    }
};

// Function to update the Product Quantity
export async function updateProduct(req,res) {
    const name = req.params.name;
    const updates = req.body;
    try{
        const updatedProduct = await productInfo.findOneAndUpdate({name: name}, updates, {new: true});

        if(updatedProduct){
            return res.status(200).json(updatedProduct);
        } else {
            return res.status(404).json({message: "Product not found"});
        }
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
} ;

// Function to delete a Product from database
export async function deleteProduct(req, res){
    const name = req.params.name;
    try {
        const deleteProduct = await productInfo.findOneAndDelete({ name: name });

        if (deleteProduct) {
            return res.status(200).json(deleteProduct);
        }else {
            return res.status(404).json({message:"Product not Found"});
        }
    }
    catch (err){
        return res.status(500).json({message: err.message});
    }
};