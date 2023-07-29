import React, { useState } from 'react';
import './ContactBanner.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const socialIcons = [
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    YouTubeIcon,
    PinterestIcon,
];

function ContactBanner() {
    const [inputValue, setInputValue] = useState('');
    const onEmailSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            window.alert('inputValue submitted', inputValue);
        }
        setInputValue('');
    };
    return (
        <div className='contact-banner'>
            <div className='contact-banner-info'>Be in touch with us:</div>
            <div className='contact-banner-form'>
                <form onSubmit={onEmailSubmit}>
                    <input
                        onChange={(e) => setInputValue(e.target.value)}
                        className='contact-banner-input'
                        type='email'
                        placeholder='enter your email'
                        value={inputValue}
                    />
                    <input
                        className='contact-banner-submit-btn'
                        type='submit'
                        name='email-submit-btn'
                        id='email-submit'
                    />
                </form>
            </div>
            <div className='contact-banner-icons'>
                {socialIcons.map((Icon, index) => (
                    <span className='contact-banner-icon' key={index}>
                        <Icon />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ContactBanner;
