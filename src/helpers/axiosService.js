import axios from "axios";

const host = import.meta.env.VITE_APP_BACKEND_URL;
const adminId = import.meta.env.VITE_APP_ADMIN_ID;

//@desc Get socket URL
const getSocketUrl = async () => {
    try {
        const { data } = await axios.get(`${host}/api/v1/user/socket`);
        return data?.socketURL;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get socket URL";
    }
};

//@desc Get admin profile
const getAdminProfile = async () => {
    try {
        const { data } = await axios.get(`${host}/api/v1/tv/profile/${adminId}`);
        return data;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get admin profile";
    }
};

//@desc Get commodities
const getCommodities = async () => {
    try {
        const { data } = await axios.get(`${host}/allCommodities/${adminId}`);
        return data;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get commodities";
    }
};


//@desc Get spread
const getSpread = async () => {
    try {
        const { data } = await axios.get(`${host}/getSpread/${adminId}`);
        return data;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get spread";
    }
};


//@desc Get news
const allNewses = async () => {
    try {
        const { data } = await axios.get(`${host}/allNewses/${adminId}`);
        return data;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get newses";
    }
};

//@desc Get gold news
const getGoldPriceNews = async () => {
    try {
        const { data } = await axios.get(`${host}/api/v1/user/gold-news`);
        return data;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get gold newses";
    }
};

//@desc Get ratio
const getRatio = async () => {
    try {
        const data = await axios.get(`${host}/getGoldRatioByScrap`);
        return data;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get ratio";
    }
};

//@desc Get Value Type For Display
const getLiveValueTypeForDisplay = async () => {
    try {
        const data = await axios.get(`${host}/getLiveValueTypeForDisplay/${adminId}`);
        return data;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get value Type For Display";
    }
};

//@desc Get banners
const findBanners = async () => {
    try {
        const data = await axios.get(`${host}/getAllImages/${adminId}`);
        return data;
    } catch (error) {
        return error?.response?.data?.message || "Failed to get banners";
    }
};


export {
    getSocketUrl,
    getCommodities,
    getSpread,
    allNewses,
    getRatio,
    getLiveValueTypeForDisplay,
    getGoldPriceNews,
    findBanners,
    getAdminProfile
}