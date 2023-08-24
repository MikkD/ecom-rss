const Slider = require('../models/sliderAssetsModel');

const getSliderAssets = async (req, res) => {
    const silderAssets = await Slider.find();
    res.satus(200).json({ silderAssets });
};

module.exports = {
    getSliderAssets,
};
