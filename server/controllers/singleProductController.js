const Singleproducts = require('../models/singleProductModel');

const getSingleProduct = async (req, res) => {
    const randomNum = Math.round(Math.random() * 3);
    const id = randomNum === 0 ? 1 : randomNum;
    const singleProduct = await Singleproducts.find({ id: id.toString() });

    return res.status(200).json({ singleProduct: singleProduct[0] });
};

module.exports = {
    getSingleProduct,
};
