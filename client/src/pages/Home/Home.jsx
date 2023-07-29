import React from 'react';
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import Products from '../../shared/Products/Products';
import Categories from '../../components/Categories/Categories';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

import featuredAssets from '../../data/featuredAssets.json';
import trendingAssets from '../../data/trendingAssets.json';

const featuredProductsDescription = `Feature Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,suscipit numquam at non dolore obcaecati fuga, tempore nesciunt, odit
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
                title='Featured'
                assets={featuredAssets}
                description={featuredProductsDescription}
            />
            <Categories />
            <Products
                title='Trending'
                assets={trendingAssets}
                description={trendingProductsDescription}
            />
            <ContactBanner />
        </div>
    );
}

export default Home;
