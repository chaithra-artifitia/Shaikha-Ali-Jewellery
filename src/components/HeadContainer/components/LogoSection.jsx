import React from 'react';
import { Logo } from '../../../assets/images';

const LogoSection = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <img src={Logo} alt="logo" className='lg:max-w-64 xl:max-w-sm 2xl:max-w-lg h-auto object-cover' />
        </div>
    );
}

export default LogoSection;
