import { APIError } from "../extends/api_errors.js";
import { API_URL, buildUrl } from "./helpers.js";
const Routes = {
    getAll: (params) => `${API_URL}/api/posts${buildUrl("", params)}`,
    create: `${API_URL}/api/posts`,
    edit: (id) => `${API_URL}/api/posts/${id}`,
    delete: (id) => `${API_URL}/api/posts/${id}`
};
export const WebpagePostsAPI = {
    get: async (params) => await fetch(Routes.getAll(params), { method: "GET" }).then(res => res.json()),
    create: async (token, data) => {
        if (!token)
            throw new Error("You must provide an authorization token to this function.");
        const response = await fetch(Routes.create, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        });
        if (response.status !== 201) {
            const data = await response.json().catch(() => ({ message: "Unknown error" }));
            throw new APIError({
                code: response.status,
                api_message: data.message ?? "Unknown error",
                path: Routes.create,
                method: "POST"
            }, "The API responded with an error.");
        }
        return await response.json();
    },
    edit: async (token, id, data) => {
        if (!token)
            throw new Error("You must provide an authorization token to this function.");
        if (!id)
            throw new Error("You must provide a post id to this function.");
        const response = await fetch(Routes.edit(id), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        });
        if (response.status !== 200) {
            const data = await response.json().catch(() => ({ message: "Unknown error" }));
            throw new APIError({
                code: response.status,
                api_message: data.message ?? "Unknown error",
                path: Routes.edit(id),
                method: "PATCH"
            }, "The API responded with an error.");
        }
        return await response.json();
    },
    delete: async (token, id) => {
        if (!token)
            throw new Error("You must provide an authorization token to this function.");
        if (!id)
            throw new Error("You must provide a post id to this function.");
        const response = await fetch(Routes.delete(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token
            }
        });
        if (response.status !== 200) {
            const data = await response.json().catch(() => ({ message: "Unknown error" }));
            throw new APIError({
                code: response.status,
                api_message: data.message ?? "Unknown error",
                path: Routes.delete(id),
                method: "DELETE"
            }, "The API responded with an error.");
        }
        return await response.json();
    }
};
