const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const getCloudinaryUrl = async (localImg) => {
    try {
        const localImgpath = `/Users/nikitapetrov/Desktop/ecom-rss/server${localImg}`;
        const uploadedImg = await cloudinary.uploader.upload(localImgpath);
        return uploadedImg.secure_url;
    } catch (err) {
        console.log('err', err);
    }
};

const transformGallery = async (gallery) => {
    const res = [];
    for (const galleryObj of gallery) {
        const cloudinaryImgUrl = await getCloudinaryUrl(galleryObj.imgUrl);
        res.push({ ...galleryObj, imgUrl: cloudinaryImgUrl });
    }
    return res;
};

const transformData = async (data) => {
    const result = [];
    for (const product of data) {
        result.push({ ...product, gallery: await transformGallery(product.gallery) });
    }

    return result;
};

const findMaxMinPrice = async (schema, categoryType) => {
    const result = await schema.aggregate([
        {
            $match: { categoryType: categoryType }, // Filter documents by categoryType
        },
        {
            $group: {
                _id: null, // Grouping by null means consider all documents as a single group
                maxPrice: { $max: '$price' },
                minPrice: { $min: '$price' },
            },
        },
    ]);

    if (result.length === 0) {
        return { maxPrice: null, minPrice: null };
    }

    const { maxPrice, minPrice } = result[0];
    return { maxPrice, minPrice };
};

const sortByPrice = (priceFilter) => (priceFilter === 'LTH' ? 1 : -1);

const generateQueryParams = ({ categoryType, type, priceRangeLimit }) => {
    const query = {};

    if (categoryType) {
        query.categoryType = categoryType;
    }

    if (type) {
        const typesArray = type.split(',');
        query.type = { $in: typesArray };
    }

    if (priceRangeLimit) {
        query.price = { $lte: priceRangeLimit };
    }

    return query;
};

module.exports = {
    findMaxMinPrice,
    sortByPrice,
    generateQueryParams,
};
