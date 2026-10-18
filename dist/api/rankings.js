import { API_URL, buildUrl } from "./helpers.js";
const Endpoint = {
    get: (params) => `${API_URL}/country_rankings${buildUrl("", params)}`
};
export const RankingsAPI = {
    get: async (params) => {
        return await fetch(Endpoint.get(params), { method: "GET" })
            .then(res => res.json());
    }
};
