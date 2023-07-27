import React from 'react';
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

function Home() {
    return (
        <div className='main-wrapper'>
            <Slider />
            <FeaturedProducts />
        </div>
    );
}

export default Home;
