import React from 'react';
import { PhoneWarning } from '../../assets/images';

const PhoneView = () => {
    return (
        <div className='w-full h-screen bg-dark_green flex justify-center items-center flex-col'>
            <img src={PhoneWarning} alt="phoneWarning" />
            <div className='text-white text-center text-base sm:text-lg md:text-xl'>
                <p>Mobile Preview is not available;</p>
                <p>please open in a TV, desktop, or Web browser.</p>
            </div>
        </div>
    );
}

export default PhoneView;
