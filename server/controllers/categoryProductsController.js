const asyncHandler = require('express-async-handler');

const Products = require('../models/categoryProductsModel');

const getCategoryProducts = async (req, res) => {
    const { categoryType } = req.params || {};
    const { page = 0, pageSize = 10, type } = req.query || {};

    const generateQueryParams = ({ categoryType, type }) => {
        const query = {};
        if (categoryType) {
            query.categoryType = categoryType;
        }

        if (type) {
            const typesArray = type.split(',');
            query.type = { $in: typesArray };
        }

        return query;
    };

    const query = generateQueryParams({ categoryType, type });

    const categoryProducts = await Products.find(query)
        .skip(page * pageSize)
        .limit(pageSize);

    const totalCount = await Products.countDocuments({ categoryType: `${categoryType}` });
    const productTypeOptions = await Products.distinct('type', {
        categoryType: `${categoryType}`,
    });

    res.status(200).json({ categoryProducts, totalCount, productTypeOptions });
};

module.exports = {
    getCategoryProducts,
};
