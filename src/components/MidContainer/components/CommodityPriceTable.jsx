import React from 'react';

const CommodityPriceTable = () => {
    const commodities = [
        { commodity: 'GOLD', weight: '1 TTB', buy: '39,505', sell: '39,532' },
        { commodity: 'GOLD 995', weight: '1 KG', buy: '337,344', sell: '337,916' },
        { commodity: 'SILVER 875', weight: '1 KG', buy: '3,858.20', sell: '3,344.91' },
        { commodity: 'GOLD 24k', weight: '1 KG', buy: '339,033', sell: '340,058' },
        { commodity: 'GOLD 920', weight: '1 GM', buy: '311.92', sell: '312.75' }
    ];

    return (
        <div className="w-full h-full 2xl:py-4">
            <table className="w-full border-collapse text-2xl 2xl:text-4xl"
            >
                <thead>
                    <tr className="text-white uppercase">
                        <th className="p-4 text-left font-semibold">Commodity</th>
                        <th className="p-4 text-center font-semibold">Weight</th>
                        <th className="p-4 text-left font-semibold">
                            Buy <span className="text-base font-normal">AED</span>
                        </th>
                        <th className="p-4 text-left font-semibold">
                            Sell <span className="text-base font-normal">AED</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {commodities.map((item, index) => (
                        <tr
                            key={index}
                            className="border-b-4 2xl:border-b-8 font-medium text-black border-dark_green transition-colors"
                        >
                            <td className="py-2 px-4 2xl:p-4 bg-mid_yellow">{item.commodity}</td>
                            <td className="bg-mid_yellow text-center">
                                <span
                                    className="h-[3.4rem] 2xl:h-[4.5rem] flex justify-center items-center bg-yellow "
                                    style={{ clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)' }}
                                >
                                    {item.weight}
                                </span>
                            </td>
                            <td className="p-2 2xl:p-4 bg-mid_yellow font-bold">{item.buy}</td>
                            <td className="bg-mid_yellow font-bold">
                                <span
                                    className="h-[3.4rem] 2xl:h-[4.5rem] flex items-center pl-4 bg-yellow "
                                    style={{ clipPath: 'polygon(2% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                                >
                                    {item.sell}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CommodityPriceTable;