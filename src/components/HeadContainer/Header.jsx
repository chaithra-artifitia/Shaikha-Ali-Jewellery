import React from 'react';
import SpotRatesDisplay from './components/SpotRatesDisplay';
import LogoSection from './components/LogoSection';
import DateDetail from './components/DateDetail';

const Header = ({ gold, displayBidOrBuy }) => {
    return (
        <div className='w-full h-full flex flex-col lg:flex-row'>
            {/* <div className='w-full h-full flex flex-col lg:flex-row gap-5 xl:gap-10 2xl:gap-16'> */}
            <div className='w-full lg:w-9/12 flex flex-col lg:flex-row gap-10'>
                <div className='w-full h-full lg:w-[35%] xl:w-[50%]'>
                    <LogoSection />
                </div>
                <div className='w-full h-full lg:w-[65%] xl:w-[55%]'>
                    <SpotRatesDisplay gold={gold} displayBidOrBuy={displayBidOrBuy} />
                </div>
            </div>
            <div className='w-full h-full lg:w-3/12 ml-5 2xl:ml-16'>
                <DateDetail />
            </div>
        </div>
    );
}

export default Header;