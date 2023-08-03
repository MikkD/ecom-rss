import React, { useState, useEffect } from 'react';
import fallBackSliderAssets from '../../data/sliderAssets.json'; //TODO-REMOVE-AFTER-MIGRATION
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './Slider.scss';

function Slider() {
    const [transitionStep, setTransitionStep] = useState(0);
    const [sliderAssets, setSliderAssets] = useState([]);
    const [isError, setIsError] = useState(false);
    const translateXStep = 100 / sliderAssets.length; //25%
    const translateXStepLimit = 100 - translateXStep;
    const shouldShowSliderContorls = sliderAssets.length > 1;

    const getSliderAssets = async () => {
        try {
            const assets = await fetch('http://localhost:5000/slider-assets');
            const parsedAssets = await assets.json();
            setSliderAssets(parsedAssets);
        } catch (e) {
            console.error(e);
            setIsError(true);
        }
    };

    useEffect(() => {
        getSliderAssets();
    }, []);

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
            {isError ? (
                <h4>Error...</h4>
            ) : (
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
            )}
            {shouldShowSliderContorls && (
                <div className='slider-controls'>
                    <button onClick={handlePrevSlider}>
                        <ArrowLeftIcon />
                    </button>
                    <button onClick={handleNextSlider}>
                        <ArrowRightIcon />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Slider;
