export const API_URL = "https://shompi-vpn.ddns.net";
export function buildUrl(base, params) {
    if (!params)
        return base;
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            query.append(key, String(value));
        }
    });
    const queryString = query.toString();
    return queryString ? `${base}?${queryString}` : base;
}
