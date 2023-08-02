import React from 'react';
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import Products from '../../shared/Products/Products';
import Categories from '../../components/Categories/Categories';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

import newCategoryAssets from '../../data/newCategoryAssets.json';
import trendyCategoryAssets from '../../data/trendyCategoryAssets.json';

const featuredProductsDescription = `New Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,suscipit numquam at non dolore obcaecati fuga, tempore nesciunt, odit
quidem ad repellendus voluptatem veritatis quaerat neque nam magni
exercitationem itaque`;
const trendingProductsDescription = `Trending Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,suscipit numquam at non dolore obcaecati fuga, tempore nesciunt, odit
quidem ad repellendus voluptatem veritatis quaerat neque nam magni
exercitationem itaque`;

function Home() {
    return (
        <div className='main-wrapper'>
            <Slider />
            <Products
                title='New'
                assets={newCategoryAssets.slice(0, 8)}
                description={featuredProductsDescription}
            />
            <Categories />
            <Products
                title='Trending'
                assets={trendyCategoryAssets.slice(0, 6)}
                description={trendingProductsDescription}
            />
            <ContactBanner />
        </div>
    );
}

export default Home;
