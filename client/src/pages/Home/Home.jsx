import React from 'react';
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

import {
    NEW_PRODUCTS_PLACEHOLDER,
    TRENDY_PRODUCTS_PLACEHOLDER,
    NEW_CATEGORY_TYPE,
    TRENDY_CATEGORY_TYPE,
} from '../../utils/utils';

import MainProducts from '../../components/MainProducts/MainProducts';

function Home() {
    return (
        <div className='main-wrapper'>
            <Slider />
            <MainProducts
                title={NEW_CATEGORY_TYPE}
                description={NEW_PRODUCTS_PLACEHOLDER}
            />
            <Categories />
            <MainProducts
                title={TRENDY_CATEGORY_TYPE}
                description={TRENDY_PRODUCTS_PLACEHOLDER}
            />
            <ContactBanner />
        </div>
    );
}

export default Home;
