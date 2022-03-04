import axios from 'axios';

// const apiURL = process.env.NODE_ENV === "development"
//     ? "https://test-server-tau.vercel.app"
//     : "/bitrix/services/main/ajax.php"

const apiURL = "https://test-server-tau.vercel.app"

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