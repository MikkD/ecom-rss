const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { getCategoryProducts } = require('./controllers/categoryProductsController');
const { getSliderAssets } = require('./controllers/sliderAssetsController');

const connectDB = require('./config/db');
connectDB();

require('./utils');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/slider-assets', (req, res) => {});

app.get('/categories-assets', (req, res) => {});

app.get('/category/:categoryType', getCategoryProducts);

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
