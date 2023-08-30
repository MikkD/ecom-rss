import React from 'react';
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

import { featuredProductsDescription } from '../../utils/utils';
import { trendingProductsDescription } from '../../utils/utils';
import MainProducts from '../../components/MainProducts/MainProducts';

function Home() {
    return (
        <div className='main-wrapper'>
            <Slider />
            <MainProducts title='new' description={featuredProductsDescription} />
            <Categories />
            <MainProducts title='trendy' description={trendingProductsDescription} />
            <ContactBanner />
        </div>
    );
}

export default Home;
