import React from 'react';
import { bullionLogo } from '../../../assets/images';

const WebDetail = () => {
    return (
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <div>
                <img
                    src={bullionLogo}
                    alt="Gold bars stacked"
                    className="w-8 xl:w-12 2xl:w-14 h-auto object-cover rounded-xl"
                />
            </div>
            <div className="text-center">
                <a
                    href="https://www.bullionstats.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 text-base 2xl:text-xl"
                    style={{ letterSpacing: "0.3em" }}
                >
                    www.bullionstats.com
                </a>
            </div>
        </div>
    );
}

export default WebDetail;
