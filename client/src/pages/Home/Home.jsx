import React from 'react';
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';

function Home() {
    return (
        <div className='main-wrapper'>
            <Slider />
            <FeaturedProducts />
            <Categories />
        </div>
    );
}

export default Home;
