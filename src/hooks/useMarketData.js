import { useState, useEffect } from "react";
import { getCommodities, getRatio, getConversionValue } from "../helpers/axiosService";

const useMarketData = () => {
    const [commodities, setCommodities] = useState([]);
    const [ratio, setRatio] = useState({});
    const [conversionRate, setConversionRate] = useState({
        base_code: "",
        conversion_rate: null,
    });


    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                //@desc Get commodities
                const commoditiesRes = await getCommodities();
                if (Array.isArray(commoditiesRes.commodities)) {
                    setCommodities(commoditiesRes.commodities);
                }

                //@desc Get currency conversion
                const conversionRes = await getConversionValue("USD");
                setConversionRate(conversionRes?.data);

                //@desc Get ratio
                const ratioRes = await getRatio();
                setRatio(ratioRes?.data || {});


            } catch (error) {
                console.error("Error fetching market data:", error);
            }
        };

        fetchMarketData();
    }, []);

    return { commodities, ratio, conversionRate };
};

export default useMarketData;
