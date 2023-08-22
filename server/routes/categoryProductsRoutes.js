const express = require('express');
const router = express.Router();
const newCategoryAssets = require('./data/categories/newCategoryAssets.json');
const trendyCategoryAssets = require('./data/categories/trendyCategoryAssets.json');
const menCategoryAssets = require('./data/categories/menCategoryAssets.json');
const womenCategoryAssets = require('./data/categories/womenCategoryAssets.json');
const accessoriesCategoryAssets = require('./data/categories/accessoriesCategoryAssets.json');
const saleCategoryAssets = require('./data/categories/saleCategoryAssets.json');
const { getCategoryProducts } = require('../controllers/categoryProductsController');

router.get('/category/new', (req, res) => {
    setTimeout(() => res.json(newCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

router.get('/category/trendy', (req, res) => {
    setTimeout(() => res.json(trendyCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

router.get('/category/men', (req, res) => {
    setTimeout(() => res.json(menCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

router.get('/category/women', (req, res) => {
    setTimeout(() => res.json(womenCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

router.get('/category/sale', (req, res) => {
    setTimeout(() => res.json(saleCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

router.get('/category/accessories', (req, res) => {
    setTimeout(() => res.json(accessoriesCategoryAssets), 1000);
    // res.json(categoriesAssets);
});

module.exports = router;
