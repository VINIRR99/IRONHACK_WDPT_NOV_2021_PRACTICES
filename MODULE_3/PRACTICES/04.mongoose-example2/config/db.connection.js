require("dotenv").config();

const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

    // When successfully connected
    mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
    
    // If the connection throws an error
    mongoose.connection.on('error', err => console.log(`Mongoose default connection error: ${err}`));
    
    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
    
    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
};

module.exports = connectDb;