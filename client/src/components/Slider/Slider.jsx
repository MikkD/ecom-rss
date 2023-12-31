import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useGetSlidersQuery } from '../../services/sliders';
import './Slider.scss';

function Slider() {
    const [transitionStep, setTransitionStep] = useState(0);
    const { data, isLoading, isError } = useGetSlidersQuery();
    const assets = data?.sliderAssets || [];

    const translateXStep = 100 / assets?.length; //25%
    const translateXStepLimit = 100 - translateXStep;
    const shouldShowSliderContorls = assets?.length > 1;

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

    if (isError) return <h4>Error...</h4>;
    return (
        <div className='slider'>
            {isLoading ? (
                <h4>Loading...</h4>
            ) : (
                <div
                    style={{
                        transform: `translateX(-${transitionStep}%)`,
                        width: `(${assets?.length}vw)`,
                    }}
                    className='slider-imgs-wrapper'>
                    {assets?.length &&
                        assets.map(({ id, imgUrl, name }) => (
                            <img
                                className='slider-img'
                                key={id}
                                src={imgUrl}
                                alt={name}
                            />
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
