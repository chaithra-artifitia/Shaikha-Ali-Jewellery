import React from 'react';
import CommodityPriceTable from './components/CommodityPriceTable';
import CountryAndCurrency from './components/CountryAndCurrency';

const MidSection = ({ commodities, gold, silver, spread, conversionRate }) => {
    return (
        <div className='w-full h-full flex justify-between'>
            {/* <div className='w-full h-full flex justify-between gap-7 2xl:gap-10'> */}
            <div className='w-3/5 h-full'>
                <CommodityPriceTable
                    gold={gold}
                    silver={silver}
                    commodities={commodities}
                    spread={spread}
                />
            </div>
            <div className='w-2/5 h-full ml-7 2xl:ml-10'>
                <CountryAndCurrency
                    conversionRate={conversionRate}
                />
            </div>
        </div>
    );
}

export default MidSection;
