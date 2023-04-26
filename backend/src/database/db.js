import mongoose, { connect } from 'mongoose';

connect('mongodb://127.0.0.0.1:27017/inventory',{ useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection;

connection.once('open',() => {
    console.log("Connection established successfully with the database!!!")
});
