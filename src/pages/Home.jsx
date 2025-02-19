import React, { useEffect, useState } from "react";
import { BgPic } from "../assets/images";
import Header from "../components/HeadContainer/Header";
import MidSection from "../components/MidContainer/MidSection";
import Footer from "../components/Footer/Footer";
import useSocketConnection from "../hooks/useSocketConnection";
import useAdminData from "../hooks/useAdminData";
import useMarketData from "../hooks/useMarketData";

const Home = () => {


    const [gold, setGold] = useState({
        cur: { ask: 0, bid: 0, highPrice: 0, lowPrice: 0 },
        pre: { ask: 0, bid: 0, highPrice: 0, lowPrice: 0 },
    });
    const [silver, setSilver] = useState({
        cur: { ask: 0, bid: 0, highPrice: 0, lowPrice: 0 },
        pre: { ask: 0, bid: 0, highPrice: 0, lowPrice: 0 },
    });


    const { socket } = useSocketConnection();
    const { adminData, isBlocked, isExpired } = useAdminData();
    const { commodities, spread, ratio, displayBidOrBuy } = useMarketData();

    //@desc Listen for GOLD rate changes
    useEffect(() => {
        if (!socket) return;
        socket.on("connect", () => { });
        socket.on("disconnect", () => { });
        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
        socket.on("gold-rate-change", (data) => {
            setGold((e) => {
                return { cur: data.data, pre: e.cur };
            });
        });
        socket.on("silver-rate-change", (data) => {
            setSilver((e) => {
                return { cur: data.data, pre: e.cur };
            });
        });

    }, [socket]);


    const setViewportHeight = () => {
        document.documentElement.style.setProperty(
            "--vh",
            `${window.innerHeight * 0.01}px`
        );
    };

    // Run on page load & resize
    window.addEventListener("resize", setViewportHeight);
    setViewportHeight();

    return (
        <div
            className="hidden w-full lg:flex flex-col relative"
            style={{ height: "calc(var(--vh, 1vh) * 100)" }} // Fallback for unsupported browsers
        >
            {/* Background Image */}
            <img
                src={BgPic}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content on top of background */}
            <div className="relative z-10 flex flex-col w-full h-full px-8 py-5 2xl:px-12 2xl:py-7">
                <div className="h-[23%]"><Header gold={gold} displayBidOrBuy={displayBidOrBuy} /></div>
                <div className="h-[58%]">
                    <MidSection
                        gold={gold}
                        silver={silver}
                        commodities={commodities}
                        spread={spread} />
                </div>
                <div className="h-[20%]"><Footer ratio={ratio} /></div>
            </div>
        </div>
    );
};

export default Home;
