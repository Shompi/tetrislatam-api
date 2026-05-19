import { API_URL } from "./helpers";
export const StatusEndpoints = {
    /** Status endpoint of the API, it should always return a **418** response code */
    get: async () => {
        const response = await fetch(`${API_URL}/api`, { method: "GET" });
        const data = await response.json();
        return data;
    }
};
