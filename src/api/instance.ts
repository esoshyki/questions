import axios from 'axios';

const apiURL = process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : process.env.REACT_APP_VERCEL_URL 
    ? process.env.REACT_APP_VERCEL_URL
    : "/bitrix/services/main/ajax.php";

export const fakeSessionId = "e14e316cb5cbcae4320a834ebb234f56";

const instanceAPI = axios.create({
    baseURL: apiURL,
    headers: {
        Accept: "application/json", "Content-Type" : "application/json"
    }
});

instanceAPI.defaults.params = {};
instanceAPI.defaults.params["c"] = "manao:support.faq";
instanceAPI.defaults.params["mode"] = "class";

export default instanceAPI;