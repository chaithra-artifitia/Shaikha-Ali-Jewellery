import React from 'react';
import CommodityPriceTable from './components/CommodityPriceTable';
import CountryAndCurrency from './components/CountryAndCurrency';

const MidSection = () => {
    return (
        <div className='w-full h-full flex justify-between'>
            {/* <div className='w-full h-full flex justify-between gap-7 2xl:gap-10'> */}
            <div className='w-3/5'>
                <CommodityPriceTable />
            </div>
            <div className='w-2/5 ml-7 2xl:ml-10'>
                <CountryAndCurrency />
            </div>
        </div>
    );
}

export default MidSection;
