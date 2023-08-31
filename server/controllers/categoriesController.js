const mongoose = require('mongoose');
const Categories = require('../models/categoriesModel');

const getCategories = async (req, res) => {
    const categories = await Categories.find();
    res.status(200).json({ categories });
};

module.exports = {
    getCategories,
};
