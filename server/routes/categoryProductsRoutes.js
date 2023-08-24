const express = require('express');
const router = express.Router();
const { getCategoryProducts } = require('../controllers/categoryProductsController');

app.get('/category/men', getCategoryProducts);

module.exports = router;
