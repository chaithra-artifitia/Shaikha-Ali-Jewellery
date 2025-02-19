import { useState, useEffect } from "react";
import { getAdminProfile } from "../helpers/axiosService";

const useAdminData = () => {
    const [adminData, setAdminData] = useState(null);
    const [isBlocked, setIsBlocked] = useState(false);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const fetchAdminProfile = async () => {
            const res = await getAdminProfile();
            setAdminData(res);

            if (!res.status || res.isBlocked) {
                setIsBlocked(true);
            } else {
                checkSubscriptionExpired(res);
            }
        };

        const checkSubscriptionExpired = (data) => {
            const expireDate = new Date(data?.package?.expire_date);
            if (expireDate < new Date()) {
                setIsExpired(true);
            }
        };

        fetchAdminProfile();
    }, []);

    return { adminData, isBlocked, isExpired };
};

export default useAdminData;
