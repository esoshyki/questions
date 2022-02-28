import axios from 'axios';
import { createMockInstance } from './mockApi';

const apiURL = process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : process.env.REACT_APP_VERCEL_URL 
    ? process.env.REACT_APP_VERCEL_URL
    : "https://dev-bitrix.by/bitrix/services/main/ajax.php";

const mock = process.env.NODE_ENV === "development" || !!process.env.REACT_APP_VERCEL_URL;

const instanceAPI = axios.create({
    baseURL: apiURL,
    headers: {
        Accept: "application/json", "Content-Type" : "application/json"
    }
});

instanceAPI.defaults.params = {};
instanceAPI.defaults.params["c"] = "manao:support.faq";
instanceAPI.defaults.params["mode"] = "class";

if (mock) {
    createMockInstance(instanceAPI);
    }

export default instanceAPI;  