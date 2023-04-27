import express, { json, urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./src/database/db.js";
import productInfoRoute from "./src/routes/product.router.js";
import orderInfoRoute from "./src/routes/order.router.js";


var app = express();

app.use(urlencoded({extended:false}));
app.use(cors())
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send(
        `<h1> Welcome .. <\h1>`
    );
});

app.use("/productInfo",productInfoRoute);
app.use("/orderInfo",orderInfoRoute);

app.listen(3000, () => {
    console.log("Server started in port 3000");
});