const express = require("express");
const Product = require('../models/product.model.js');
const router = express.Router();
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

// create a product
router.post('/', createProduct);
// read all products
router.get('/', getProducts);
// read a product by ID
router.get('/:id', getProduct);
// update a product
router.put('/:id', updateProduct);
// delete a product
router.delete('/:id', deleteProduct);

module.exports = router;