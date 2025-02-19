import React from 'react';

const SpotRatesDisplay = ({ gold, displayBidOrBuy }) => {
    const formatGoldPrice = (price) => {
        if (!price) return "0.00";
        return Number(price).toFixed(2);
    };
    return (
        <div className="w-full h-full bg-dark_green py-2 2xl:py-6 px-6 2xl:px-8 flex flex-col justify-center border border-dark_sky rounded-sm">
            <div className='h-[30%] flex'>
                <div className='w-1/4'>
                    <span className="text-white text-lg xl:text-xl 2xl:text-3xl font-medium">Spot Rates</span>
                </div>
                <div className="flex w-3/4 gap-4">
                    <div className='w-1/2'>
                        {/* <span className="text-white flex justify-center items-center gap-2"> */}
                        <span className="text-white flex justify-center items-center" style={{ gap: "0.5rem" }}>
                            <span className="text-sm 2xl:text-base font-medium bg-white px-1.5 rounded-md text-black">$</span>
                            <span className='text-xl 2xl:text-3xl font-medium uppercase'>{displayBidOrBuy?.bidOrBuy}</span>
                            <span className="text-lg xl:text-sm 2xl:text-xl font-medium mt-2">oz</span>
                        </span>
                    </div>
                    <div className='w-1/2'>
                        {/* <span className="text-white flex justify-center items-center gap-2"> */}
                        <span className="text-white flex justify-center items-center" style={{ gap: "0.5rem" }}>
                            <span className="text-sm 2xl:text-base font-medium bg-white px-1.5 rounded-md text-black">$</span>
                            <span className='text-xl 2xl:text-3xl font-medium uppercase'>{displayBidOrBuy?.askOrSell}</span>
                            <span className="text-lg xl:text-sm 2xl:text-xl font-medium mt-2">oz</span>
                        </span>
                    </div>
                </div>

            </div>

            <div className='h-[65%] flex'>
                <div className='w-1/4'>
                    <span className="text-white text-[1.5rem] xl:text-[1.7rem] 2xl:text-[2.6rem] font-bold">GOLD</span>
                </div>
                <div className="flex w-3/4">
                    {/* Gold BUY/BID */}
                    <div className="w-1/2 flex flex-col items-center">
                        <div
                            className={`w-32 xl:w-36 2xl:w-52 border border-yellow text-white text-3xl 2xl:text-5xl font-bold py-2 2xl:py-3 px-1 rounded-lg text-center 
                            ${Number(gold?.cur?.bid) < Number(gold?.pre?.bid)
                                    ? "bg-red"
                                    : Number(gold?.cur?.bid) > Number(gold?.pre?.bid)
                                        ? "bg-blue"
                                        : "bg-dark_green"
                                }`}
                        >
                            {formatGoldPrice(gold?.cur?.bid)}
                        </div>

                        <div className="flex items-center justify-center gap-1 mt-1 text-red">
                            <span className="text-base 2xl:text-xl">▼</span>
                            <span className="ml-1 text-sm 2xl:text-lg text-white">{formatGoldPrice(gold?.cur?.lowPrice)}</span>
                        </div>
                    </div>
                    {/* Gold ASK/SELL */}
                    <div className="w-1/2 flex flex-col items-center">
                        <div
                            className={`w-32 xl:w-36 2xl:w-52 border border-yellow text-white text-3xl 2xl:text-5xl font-bold py-2 2xl:py-3 px-1 rounded-lg text-center 
                            ${Number(gold?.cur?.ask) < Number(gold?.pre?.ask)
                                    ? "bg-red"
                                    : Number(gold?.cur?.ask) > Number(gold?.pre?.ask)
                                        ? "bg-blue"
                                        : "bg-dark_green"
                                }`}
                        >
                            {formatGoldPrice(gold?.cur?.ask)}
                        </div>

                        <div className="flex items-center justify-center gap-1 mt-1 text-blue">
                            <span className="text-base 2xl:text-xl">▲</span>
                            <span className="ml-1 text-sm 2xl:text-lg text-white">{formatGoldPrice(gold?.cur?.highPrice)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpotRatesDisplay;
