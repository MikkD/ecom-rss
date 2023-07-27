import React, { useState } from 'react';
import sliderAssets from '../../data/sliderAssets.json';
import './Home.scss';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
function Home() {
    const [transitionStep, setTransitionStep] = useState(0);
    const translateXStep = 100;
    const totalTranslateXRange = (sliderAssets.length - 1) * translateXStep;

    const handlePrevSlider = () =>
        setTransitionStep((prevStep) => {
            if (prevStep === 0) return totalTranslateXRange;
            return prevStep - translateXStep;
        });

    const handleNextSlider = () =>
        setTransitionStep((prevStep) => {
            if (prevStep - totalTranslateXRange === 0) return 0;
            return prevStep + translateXStep;
        });

    return (
        <div className='main-wrapper'>
            <div className='slider'>
                <div
                    style={{ transform: `translateX(-${transitionStep}%)` }}
                    className='slider-imgs-wrapper'>
                    {sliderAssets.map(({ id, imgUrl, name }) => (
                        <img className='slider-img' key={id} src={imgUrl} alt={name} />
                    ))}
                </div>
                <div className='slider-controls'>
                    <button onClick={handlePrevSlider}>
                        <ArrowLeftIcon />
                    </button>
                    <button onClick={handleNextSlider}>
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
