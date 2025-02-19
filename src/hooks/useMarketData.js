import { useState, useEffect } from "react";
import { getCommodities, getSpread, getRatio, getLiveValueTypeForDisplay, getConversionValue } from "../helpers/axiosService";

const useMarketData = () => {
    const [commodities, setCommodities] = useState([]);
    const [spread, setSpread] = useState({});
    const [ratio, setRatio] = useState({});
    const [displayBidOrBuy, setDisplayBidOrBuy] = useState({
        bidOrBuy: "Bid",
        askOrSell: "Ask",
    });
    const [conversionRate, setConversionRate] = useState({
        base_code: "",
        conversion_rate: null, // Example key, adjust based on your actual data
    });


    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const commoditiesRes = await getCommodities();
                if (Array.isArray(commoditiesRes.commodities)) {
                    setCommodities(commoditiesRes.commodities);
                }

                const spreadRes = await getSpread();
                setSpread(spreadRes);

                const conversionRes = await getConversionValue("USD");
                setConversionRate(conversionRes?.data);


                const ratioRes = await getRatio();
                setRatio(ratioRes?.data || {});

                const displayRes = await getLiveValueTypeForDisplay();
                setDisplayBidOrBuy(displayRes?.data || {});
            } catch (error) {
                console.error("Error fetching market data:", error);
            }
        };

        fetchMarketData();
    }, []);

    return { commodities, spread, ratio, displayBidOrBuy, conversionRate };
};

export default useMarketData;
