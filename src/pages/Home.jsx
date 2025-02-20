import React, { useEffect, useState } from "react";
import { BgPic } from "../assets/images";
import Header from "../components/HeadContainer/Header";
import MidSection from "../components/MidContainer/MidSection";
import Footer from "../components/Footer/Footer";
import useSocketConnection from "../hooks/useSocketConnection";
import useAdminData from "../hooks/useAdminData";
import useMarketData from "../hooks/useMarketData";
import useAdminBasedData from "../hooks/useAdminBasedData";
import { Modal } from "antd";
import ServiceUnavailable from "../components/Warnings/ServiceUnavailable";
import SubscriptionExpireSoon from "../components/Warnings/SubscriptionExpireSoon";
import SubscriptionExpired from "../components/Warnings/SubscriptionExpired";
import PhoneView from "../components/Warnings/PhoneView";
import MarketClose from "../components/Warnings/MarketClose";

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
    const { adminData,
        openBlocked,
        handleCloseBlocked,
        openSubscriptionExpireSoon,
        handleOpenExpireSoonClose,
        subscriptionExpireDate,
        openSubscriptionExpired,
        handleCloseSubscriptionExpired,
        isMarketOpen,

        handleOpenSubscriptionExpired,
        handleExpireSoonOpen,

    } = useAdminData();
    const { spread, displayBidOrBuy, news, goldNews, banners } = useAdminBasedData()
    const { commodities, ratio, conversionRate } = useMarketData();

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
        <div className="w-full flex flex-col relative"
            style={{ height: "calc(var(--vh, 1vh) * 100)" }} // Fallback for unsupported browsers
        >

            {/* Large Screen View (hidden on small screens) */}
            <div className="hidden lg:flex flex-col relative w-full h-full">

                {/* Background Image */}
                <img
                    src={BgPic}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {!isMarketOpen && <MarketClose timeZone={adminData?.time_zone} />}

                {/* .................. Block .................. */}
                <Modal open={openBlocked} centered footer={null} onCancel={handleCloseBlocked} width={700} className="custom-ant-modal">
                    <ServiceUnavailable />
                </Modal>

                {/* .................. Subscription expired .................. */}
                <Modal open={openSubscriptionExpired} centered footer={null} onCancel={handleCloseSubscriptionExpired} width={700} className="custom-ant-modal">
                    <SubscriptionExpired />
                </Modal>

                {/* .................. Subscription expire soon .................. */}
                <Modal open={openSubscriptionExpireSoon} centered footer={null} onCancel={handleOpenExpireSoonClose} width={800} className="custom-ant-modal">
                    <SubscriptionExpireSoon subscriptionExpireDate={subscriptionExpireDate} />
                </Modal>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col w-full h-full px-8 py-5 2xl:px-12 2xl:py-7">
                    <div className="h-[23%]"><Header gold={gold} displayBidOrBuy={displayBidOrBuy} /></div>
                    <div className="h-[58%]">
                        <MidSection gold={gold} silver={silver} commodities={commodities} spread={spread} conversionRate={conversionRate} />
                    </div>
                    <div className="h-[20%]">
                        <Footer ratio={ratio} adminData={adminData} news={news} goldNews={goldNews} banners={banners} />
                    </div>
                </div>
            </div>

            {/* Mobile View (hidden on lg screens) */}
            <div className="lg:hidden w-full h-full">
                <PhoneView />
            </div>
        </div >

    );
};

export default Home;
