const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dkhixfxkp',
    api_key: '238249617812146',
    api_secret: 'hZfb3h5DpaJri93Vk4YHA5GR1K4',
});

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
        console.log('galleryObj', galleryObj);
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
