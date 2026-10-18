import { APIError } from "../extends/api_errors.js";
import { API_URL, buildUrl } from "./helpers.js";
const EventsEndpoints = {
    getAll: (params) => `${API_URL}/events${buildUrl("", params)}`,
    getOne: (eventId) => `${API_URL}/events/${eventId}`,
    create: `${API_URL}/events`,
    patch: (eventId) => `${API_URL}/events/${eventId}`,
    delete: (eventId) => `${API_URL}/events/${eventId}`
};
export const EventsAPI = {
    /** Status endpoint of the API, it should always return a **418** response code */
    getAll: async (params) => {
        return await fetch(EventsEndpoints.getAll(params), { method: "GET" }).then(res => res.json());
    },
    getOne: async (eventId) => {
        return await fetch(EventsEndpoints.getOne(eventId), { method: "GET" }).then(res => res.json());
    },
    create: async (token, data) => {
        const path = EventsEndpoints.create;
        if (!token)
            throw new Error("You must provide an authorization token to this function.");
        const response = await fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        });
        if (response.status !== 201) {
            const data = await response.json().catch(() => ({ message: "Unknown error" }));
            throw new APIError({
                code: response.status,
                api_message: data.message ?? "Unknown error",
                path: EventsEndpoints.create,
                method: "POST"
            }, "The API responded with an error.");
        }
        return await response.json();
    },
    edit: async (token, eventId, data) => {
        if (!token)
            throw new Error("You must provide an authorization token to this function.");
        if (!eventId)
            throw new Error("You must provide an event id to this function.");
        const response = await fetch(`${EventsEndpoints.patch(eventId)}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    },
    /** This function returns the deleted event */
    delete: async (token, eventId) => {
        if (!token)
            throw new Error("You must provide an authorization token to this function.");
        if (!eventId)
            throw new Error("You must provide an event id to this function.");
        const response = await fetch(`${EventsEndpoints.delete(eventId)}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        return await response.json();
    }
};
