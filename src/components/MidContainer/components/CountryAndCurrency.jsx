import React, { useState, useEffect } from 'react';
import { EUR, GBP, INR, MYR, SGD, ZAR } from '../../../assets/images';

const CountryAndCurrency = ({ conversionRate }) => {
    const initialCurrencyData = [
        { code: "INR", name: "Indian Rupee", rate: 87.5773, flag: INR },
        { code: "MYR", name: "Malaysian Ringgit", rate: 4.4357, flag: MYR },
        { code: "SGD", name: "Singapore Dollar", rate: 1.3537, flag: SGD },
        { code: "ZAR", name: "Zuid-Afrikaanse Rand", rate: 18.6154, flag: ZAR },
        { code: "GBP", name: "Great British Pound", rate: 0.8048, flag: GBP },
        { code: "EUR", name: "Euro", rate: 0.9653, flag: EUR },
    ];

    const [updatedCurrencyData, setUpdatedCurrencyData] = useState(initialCurrencyData);

    useEffect(() => {
        if (conversionRate?.conversion_rates) {
            const updatedData = initialCurrencyData.map((item) => ({
                ...item,
                rate: conversionRate.conversion_rates[item.code] || item.rate, // Update rate if available
            }));
            setUpdatedCurrencyData(updatedData);
        }
    }, [conversionRate]);

    return (
        <div className="w-full h-full 2xl:py-4">
            <table className="w-full border-collapse mt-[4rem] 2xl:mt-[4.5rem] text-2xl 2xl:text-3xl">
                <tbody>
                    {updatedCurrencyData.map((item, index) => (
                        <tr
                            key={index}
                            className="border-b-4 2xl:border-b-8 font-medium text-black border-dark_green transition-colors"
                        >
                            <td className="px-2.5 bg-mid_yellow w-20">
                                <div className="flex justify-center items-center w-full h-full">
                                    <img src={item.flag} alt="country" className="w-10 2xl:w-auto" />
                                </div>
                            </td>

                            <td className="py-0.5 2xl:py-1 bg-mid_yellow flex flex-col">
                                <span className='text-lg 2xl:text-2xl'>{item.code}</span>
                                <span className='text-xs 2xl:text-sm -mt-0.5 2xl:-mt-0'>1 USD = {item.name}</span>
                            </td>

                            <td className="bg-mid_yellow text-center">
                                <span
                                    className="h-[2.7rem] 2xl:h-[3.6rem] flex justify-center items-center pl-4 bg-yellow"
                                    style={{ clipPath: 'polygon(10% 0%, 100% 0%, 98% 100%, 0% 100%)' }}
                                >
                                    {item.rate.toFixed(2)}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CountryAndCurrency;
