const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sliderAssets = require('./data/sliderAssets.json');
const categoriesAssets = require('./data/categoriesAssets.json');
const newCategoryAssets = require('./data/categories/newCategoryAssets.json');
const trendyCategoryAssets = require('./data/categories/trendyCategoryAssets.json');
const menCategoryAssets = require('./data/categories/menCategoryAssets.json');
const womenCategoryAssets = require('./data/categories/womenCategoryAssets.json');
const accessoriesCategoryAssets = require('./data/categories/accessoriesCategoryAssets.json');
const saleCategoryAssets = require('./data/categories/saleCategoryAssets.json');
const pdp = require('./data/singleProductAssets.json');
const pdp2 = require('./data/singleProduct2Assets.json');
const pdp3 = require('./data/singleProduct3Assets.json');

const app = express();
app.use(cors());

app.get('/slider-assets', (req, res) => {
    setTimeout(() => res.status(200).json(sliderAssets), 1000);
    // res.json(sliderAssets)
});

app.get('/categories-assets', (req, res) => {
    setTimeout(() => res.json(categoriesAssets), 1000);
    // res.json(categoriesAssets);
});

app.get('/category/new', (req, res) => {
    setTimeout(() => res.json(newCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

app.get('/category/trendy', (req, res) => {
    setTimeout(() => res.json(trendyCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

app.get('/category/men', (req, res) => {
    setTimeout(() => res.json(menCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

app.get('/category/women', (req, res) => {
    setTimeout(() => res.json(womenCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

app.get('/category/sale', (req, res) => {
    setTimeout(() => res.json(saleCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

app.get('/category/accessories', (req, res) => {
    setTimeout(() => res.json(accessoriesCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id; // Get the dynamic ID from the URL
    let asset = true;
    console.log('id', id);
    //TODO - To remove
    try {
        if (id < 15) {
            return setTimeout(() => res.json(pdp2), 1000);
        }

        if (id > 15 && id < 30) {
            return setTimeout(() => res.json(pdp), 1000);
        }

        if (id > 30) {
            return setTimeout(() => res.json(pdp3), 1000);
        }
    } catch (err) {
        res.status(404).send('error is :', err); // Send a 404 if the ID does not match a product
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
