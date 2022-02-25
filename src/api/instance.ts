import axios from 'axios';
import { createMockInstance } from './mockApi';

const mock = true;

const apiURL = mock 
    ? "http://localhost:8080"
    : "https://dev-bitrix.by/bitrix/services/main/ajax.php";

const instanceAPI = axios.create({
    baseURL: apiURL,
    headers: {
        Accept: "application/json", "Content-Type" : "application/json"
    }
});

instanceAPI.defaults.params = {};
instanceAPI.defaults.params["c"] = "manao:questions";
instanceAPI.defaults.params["mode"] = "class";

if (mock) {
    createMockInstance(instanceAPI);
    }

export default instanceAPI;  