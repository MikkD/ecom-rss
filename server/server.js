const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const sliderAssets = require('./data/sliderAssets.json');
const categoriesAssets = require('./data/categoriesAssets.json');

const pdp = require('./data/singleProductAssets.json');
const pdp2 = require('./data/singleProduct2Assets.json');
const pdp3 = require('./data/singleProduct3Assets.json');
const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/slider-assets', (req, res) => {
    setTimeout(() => res.status(200).json(sliderAssets), 1000);
    // res.json(sliderAssets)
});

app.get('/categories-assets', (req, res) => {
    setTimeout(() => res.json(categoriesAssets), 1000);
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
