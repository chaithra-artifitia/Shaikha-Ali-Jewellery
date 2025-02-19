import React, { useEffect, useState } from 'react';
import { Carousel1, Logo2, } from '../../assets/images';
import SentimentSection from './components/SentimentSection';
import WebDetail from './components/WebDetail';
import Marquee from './components/Marquee';

const Footer = ({ ratio, adminData, news, goldNews, banners }) => {

    const defaultImage = Carousel1;
    const images = banners?.length > 0 ? banners.map(banner => banner.imageUrl) : [defaultImage];

    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); // Start fading out

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsFading(false); // Fade in
            }, 800); // Transition time (0.9s)
        }, 5000); // Change image every 6 seconds

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <div className='w-full flex justify-between h-full'>
            <div className='w-[30%] h-full flex'>
                <img src={Logo2} alt="logo2" className='w-[30%] h-full object-cover' />
                <img src={images[0]} alt="carousel" className={`w-[70%] h-full object-cover ${isFading ? "opacity-10" : "opacity-100"}`} />
            </div>
            <div className='w-[70%] flex flex-col'>
                <div className='flex'>
                    <div className='w-1/2'><SentimentSection ratio={ratio} /></div>
                    <div className='w-1/2 flex flex-col'>
                        <div className='h-full'><WebDetail /></div>
                    </div>
                </div>
                <div className='h-1/2'>
                    <Marquee
                        adminData={adminData}
                        news={news}
                        goldNews={goldNews} />
                </div>
            </div>

        </div>
    );
}

export default Footer;
