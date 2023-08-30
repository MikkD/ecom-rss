const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

// Mongoose Connection
const connectDB = require('./config/db');
connectDB();

// Controllers
const { getCategoryProducts } = require('./controllers/categoryProductsController');
const { getSlider } = require('./controllers/sliderController');
const { getCategories } = require('./controllers/categoriesController');
const { getSingleProduct } = require('./controllers/singleProductController');

// Data Seeder for uploading cloudinary assets
require('./utils');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/slider-assets', getSlider);

app.get('/categories-assets', getCategories);

app.get('/category/:categoryType', getCategoryProducts);

app.get('/product/:id', getSingleProduct);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
