import React from 'react';
import { bullionLogo1 } from '../../assets/images';

const Space404Page = () => {
    // Create stars randomly
    const stars = Array(50).fill().map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`
    }));

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Logo */}
            <div className="absolute top-8 left-8">
                <div className="flex items-center">
                    <img src={bullionLogo1} alt="bullionLogo1" className='h-8' />
                </div>
            </div>  

            {/* Stars */}
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.animationDelay
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="text-center z-10">
                <h1 className="text-white text-9xl font-bold mb-4">404</h1>
                <p className="text-white text-2xl mb-8">Sorry, page not found</p>
                <a href='/' className="bg-blue text-white px-8 py-3 rounded-full hover:bg-light_blue transition-colors">
                    Go Home
                </a>
            </div>

            {/* Planet */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gray-800 rounded-tl-full opacity-50">
                {/* Craters */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-gray-700 rounded-full"></div>
                <div className="absolute top-1/3 left-1/2 w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="absolute top-2/3 left-1/4 w-12 h-12 bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );
};

export default Space404Page;