import React, { useState } from 'react';
import sliderAssets from '../../data/sliderAssets.json';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './Slider.scss';

function Slider() {
    const [transitionStep, setTransitionStep] = useState(0);
    const translateXStep = 100 / sliderAssets.length; //25%
    const translateXStepLimit = 100 - translateXStep;

    const handlePrevSlider = () =>
        setTransitionStep((prevStep) => {
            if (prevStep === 0) return translateXStepLimit;
            return prevStep - translateXStep;
        });

    const handleNextSlider = () =>
        setTransitionStep((prevStep) => {
            if (prevStep === translateXStepLimit) return 0;
            return prevStep + translateXStep;
        });
    return (
        <div className='slider'>
            <div
                style={{
                    transform: `translateX(-${transitionStep}%)`,
                    width: `(${sliderAssets.length}vw)`,
                }}
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
    );
}

export default Slider;
