const Slider = require('../models/sliderModel');

const getSlider = async (req, res) => {
    try {
        const sliderAssets = await Slider.find();
        console.log('🚀 ~ file:  ~ silderAssets:', sliderAssets);

        res.status(200).json({ sliderAssets });
    } catch (err) {
        console.log('ERR', err);
    }
};

module.exports = {
    getSlider,
};
