const express = require('express');
const cors = require('cors');
const sliderAssets = require('./data/sliderAssets.json');

const app = express();
app.use(cors());

app.get('/slider-assets', (req, res) => {
    res.json(sliderAssets);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
