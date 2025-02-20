import { useState, useEffect } from "react";
import { getAdminProfile } from "../helpers/axiosService";
import { DateTime } from "luxon";

const useAdminData = () => {
    const [adminData, setAdminData] = useState(null);
    const [openSubscriptionExpireSoon, setOpenSubscriptionExpireSoon] = useState(false);
    const [openSubscriptionExpired, setOpenSubscriptionExpired] = useState(false);
    const [openBlocked, setOpenBlocked] = useState(false);
    const [isMarketOpen, setIsMarketOpen] = useState(true);

    const [subscriptionExpireDate, setSubscriptionExpireDate] = useState(null); 

    // .................. Block ..................
    const handleOpenBlocked = () => setOpenBlocked(true);
    const handleCloseBlocked = () => {
        window.location.reload();
    };

    // .................. Subscription expired ..................
    const handleOpenSubscriptionExpired = () => setOpenSubscriptionExpired(true);
    const handleCloseSubscriptionExpired = () => window.location.reload();

    // .................. Subscription expire soon ..................
    const handleExpireSoonOpen = () => setOpenSubscriptionExpireSoon(true);
    const handleOpenExpireSoonClose = () => setOpenSubscriptionExpireSoon(false);

    const checkSubscriptionExpireSoon = (data) => {
        const expireDate = new Date(data?.package?.expire_date);
        const oneMonthBefore = new Date(expireDate);
        oneMonthBefore.setDate(expireDate.getDate() - 30);
        setSubscriptionExpireDate(expireDate); //Store Expire Date
        if (new Date() >= oneMonthBefore && new Date().getHours() === 10) {
            handleExpireSoonOpen();
        }
    };

    const checkSubscriptionStatus = (data) => {
        const expireDate = new Date(data?.package?.expire_date);
        const currentDate = new Date();

        if (expireDate < currentDate) {
            handleOpenSubscriptionExpired();
        } else {
            checkSubscriptionExpireSoon(data);
        }
    };


    useEffect(() => {
        const fetchAdminProfile = async () => {
            try {
                const res = await getAdminProfile();
                setAdminData(res);

                if (!res?.status || res?.isBlocked) {
                    handleOpenBlocked();
                } else {
                    checkSubscriptionStatus(res);
                }
            } catch (error) {
                console.error("Error fetching admin profile:", error);
            }
        };

        fetchAdminProfile();
    }, []);

    useEffect(() => {
        if (adminData?.time_zone) {
            const interval = setInterval(() => {
                const now = DateTime.now().setZone(adminData?.time_zone);
                const dayOfWeek = now.weekday;
                const hour = now.hour;

                const isClosed =
                    (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 1 && hour < 2) ||
                    (dayOfWeek === 6 && hour >= 1) ||
                    dayOfWeek === 7 ||
                    (dayOfWeek === 1 && hour < 2);

                setIsMarketOpen(!isClosed);
            }, 60000); // Check every minute

            return () => clearInterval(interval);
        }
    }, [adminData?.time_zone]);

    return {
        adminData,
        openBlocked,
        openSubscriptionExpired,
        openSubscriptionExpireSoon,
        subscriptionExpireDate,
        
        isMarketOpen,
        handleCloseBlocked,
        handleOpenSubscriptionExpired,
        handleCloseSubscriptionExpired,
        handleExpireSoonOpen,
        handleOpenExpireSoonClose
    };
};

export default useAdminData;
