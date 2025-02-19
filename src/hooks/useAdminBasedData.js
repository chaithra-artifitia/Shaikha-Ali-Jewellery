import { useState, useEffect } from "react";
import { allNewses, findBanners, getGoldPriceNews, getLiveValueTypeForDisplay, getSpread } from "../helpers/axiosService";

const useAdminBasedData = () => {
    const [news, setNews] = useState([]);
    const [goldNews, setGoldNews] = useState({});
    const [banners, setBanners] = useState([]);
    const [spread, setSpread] = useState({});
    const [displayBidOrBuy, setDisplayBidOrBuy] = useState({
        bidOrBuy: "Bid",
        askOrSell: "Ask",
    });

    useEffect(() => {
        const fetchAdminBasedData = async () => {
            try {
                //@desc Get spread
                const spreadRes = await getSpread();
                setSpread(spreadRes);

                //@desc Get Value Type For Display
                const displayRes = await getLiveValueTypeForDisplay();
                setDisplayBidOrBuy(displayRes?.data || {});

                //@desc Get news
                const newsRes = await allNewses();
                setNews(newsRes || []);

                //@desc Get gold news
                const goldNewsRes = await getGoldPriceNews();
                if (goldNewsRes.length > 0) setGoldNews(goldNewsRes[0]);

                //@desc Get banners
                const res = await findBanners();
                if (Array.isArray(res.data)) {
                    setBanners(res.data);
                }

            } catch (error) {
                console.error("Error fetching admin id based data:", error);
            }
        };

        fetchAdminBasedData();
    }, []);

    return { spread, displayBidOrBuy, news, goldNews, banners };
};

export default useAdminBasedData;
