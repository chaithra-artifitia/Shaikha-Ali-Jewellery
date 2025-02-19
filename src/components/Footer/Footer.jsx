import React from 'react';
import { Carousel1, Logo2, } from '../../assets/images';
import SentimentSection from './components/SentimentSection';
import WebDetail from './components/WebDetail';
import Marquee from './components/Marquee';

const Footer = ({ ratio }) => {
    return (
        <div className='w-full flex justify-between gap-3 2xl:gap-4 h-full'>
            <div className='h-full flex'>
                <img src={Logo2} alt="logo2" className='h-full object-cover' />
                <img src={Carousel1} alt="logo2" className='h-full object-cover' />
            </div>
            <div className='w-3/4 flex flex-col'>
                <div className='flex'>
                    <div className='w-1/2'><SentimentSection ratio={ratio} /></div>
                    <div className='w-1/2 flex flex-col'>
                        <div className='h-full'><WebDetail /></div>
                    </div>
                </div>
                <div className='h-1/2'><Marquee /></div>
            </div>

        </div>
    );
}

export default Footer;
