const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRout = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routs
app.use('/api/products', productRout);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});

//conects to DB and run the server
mongoose.connect("...")
    .then(() => {
        console.log("Connected to the databese");

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });

    })
    .catch(() => {
        console.log("Connection failed");
    });