    import React from 'react';
    import { commodityCalculation } from '../../../helpers/constants';

    const CommodityPriceTable = ({ commodities, gold, silver, spread }) => {

        return (
            <div className="w-full h-full 2xl:py-4 table-wrapper">
                <table className="w-full border-collapse text-xl xl:text-2xl 2xl:text-4xl"
                >
                    <thead>
                        <tr className="text-white uppercase">
                            <th className="w-1/3 p-4 text-left font-semibold">Commodity</th>
                            <th className="p-4 text-center font-semibold">Weight</th>
                            <th className="p-4 text-left font-semibold">
                                Buy <span className="text-base font-normal">AED</span>
                            </th>
                            <th className="p-4 text-left font-semibold">
                                Sell <span className="text-base font-normal">AED</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='h-[450px] xl:h-[300px] 2xl:h-[400px]'>
                        {commodities.map((commodity, index) => {
                            const words = commodity.commodity_title.split(" ");

                            return (
                                <tr
                                    key={index}
                                    className="border-b-4 2xl:border-b-8 font-medium text-black border-dark_green transition-colors"
                                >
                                    <td className="w-1/3 py-2 px-4 2xl:p-4 bg-mid_yellow">
                                        <span className='uppercase'>
                                            {words[0]}
                                        </span>
                                        <span className="text-xs xl:text-base 2xl:text-xl ml-2">
                                            {words.slice(1).join(" ")}
                                            {commodity.unitLabel === "TTB" ? "" : ` ${commodity.displayPurity}`}
                                        </span>
                                    </td>
                                    <td className="bg-mid_yellow text-center">
                                        <span
                                            className="h-[3.4rem] 2xl:h-[4.5rem] flex justify-center items-center bg-yellow "
                                            style={{ clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)' }}
                                        >
                                            {commodity.unit} {commodity.unitLabel}

                                        </span>
                                    </td>
                                    <td className="p-2 2xl:p-4 bg-mid_yellow font-bold">
                                        {gold?.cur?.bid
                                            ? commodityCalculation(
                                                commodity.commodity_title === "Silver"
                                                    ? silver?.cur?.bid
                                                    : gold?.cur?.bid,
                                                commodity.commodity_title === "Silver"
                                                    ? spread.silverBidSpread
                                                    : spread.goldBidSpread,
                                                commodity.buy_premium,
                                                3.674,
                                                commodity.purity,
                                                commodity.unit,
                                                commodity.unitLabel === "TTB"
                                                    ? 116.64
                                                    : commodity.unitLabel === "KG"
                                                        ? 1000
                                                        : commodity.unitLabel === "OZ"
                                                            ? 31.1
                                                            : commodity.unitLabel === "TOLA"
                                                                ? 11.7
                                                                : 1,
                                                commodity.buy_charge
                                            )
                                            : "0.00"}
                                    </td>
                                    <td className="bg-mid_yellow font-bold">
                                        <span
                                            className="h-[3.4rem] 2xl:h-[4.5rem] flex items-center pl-4 bg-yellow "
                                            style={{ clipPath: 'polygon(2% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                                        >
                                            {gold?.cur?.ask
                                                ? commodityCalculation(
                                                    commodity.commodity_title === "Silver"
                                                        ? silver?.cur?.ask
                                                        : gold?.cur?.ask,
                                                    commodity.commodity_title === "Silver"
                                                        ? spread.silverAskSpread
                                                        : spread.goldAskSpread,
                                                    commodity.premium,
                                                    3.674,
                                                    commodity.purity,
                                                    commodity.unit,
                                                    commodity.unitLabel === "TTB"
                                                        ? 116.64
                                                        : commodity.unitLabel === "KG"
                                                            ? 1000
                                                            : commodity.unitLabel === "OZ"
                                                                ? 31.1
                                                                : commodity.unitLabel === "TOLA"
                                                                    ? 11.7
                                                                    : 1,
                                                    commodity.charges
                                                )
                                                : "0.00"}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    export default CommodityPriceTable;