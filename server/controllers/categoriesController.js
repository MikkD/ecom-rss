const mongoose = require('mongoose');
const Categories = require('../models/categoriesModel');

const getCategories = async (req, res) => {
    const categories = await Categories.find();
    console.log(
        '🚀 ~ file: categoriesController.js:6 ~ getCategories ~ categories:',
        categories
    );
    res.status(200).json({ categories });
};

module.exports = {
    getCategories,
};
