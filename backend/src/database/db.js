//mongoose is a tool in nodejs a\that allows you to connect to mongodb
import mongoose, { connect } from 'mongoose';

//your mongodb connection string
connect('mongodb://127.0.0.1:27017/inventory',{ useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;

connection.once('open',() => {
    console.log("MongoDB database connection established successfully")
});

