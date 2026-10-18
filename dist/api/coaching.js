import { APIError } from "../extends/api_errors.js";
import { API_URL } from "./helpers.js";
const Routes = {
    Coach: {
        getAll: `${API_URL}/coaching/coach`,
        get: (id) => `${API_URL}/coaching/coach/${id}`,
        getTickets: (coach_id) => `${API_URL}/coaching/coach/${coach_id}/tickets`,
        /** This endpoint needs authentication */
        create: `${API_URL}/coaching/coach`,
        /** This endpoint needs authentication */
        update: (id) => `${API_URL}/coaching/coach/${id}`,
        /** This endpoint needs authentication */
        delete: (id) => `${API_URL}/coaching/coach/${id}`,
    },
    Student: {
        get: (id) => `${API_URL}/coaching/students/${id}`,
        getTickets: (id) => `${API_URL}/coaching/students/${id}/tickets`,
        /** This endpoint needs authentication */
        create: `${API_URL}/coaching/students`,
    },
    Tickets: {
        get: (id) => `${API_URL}/coaching/tickets/${id}`,
        /** This endpoint needs authentication */
        create: `${API_URL}/coaching/tickets`,
        /** This endpoint needs authentication */
        update: (id) => `${API_URL}/coaching/tickets/${id}`,
        /** This endpoint needs authentication */
        claim: (id, coach_id) => `${API_URL}/coaching/tickets/${id}/claim?coachId=${coach_id}`,
        /** This endpoint needs authentication */
        delete: (id) => `${API_URL}/coaching/tickets/${id}`,
    },
};
export const CoachingAPI = {
    coaches: {
        getAll: async () => {
            const response = await fetch(Routes.Coach.getAll, { method: "GET" });
            const data = (await response.json());
            return data;
        },
        get: async (id) => {
            if (!id)
                throw new Error("You must provide a coach id to this function.");
            const response = await fetch(Routes.Coach.get(id), { method: "GET" });
            const data = (await response.json());
            return data;
        },
        getTickets: async (coach_id) => {
            if (!coach_id)
                throw new Error("You must provide a coach id to this function.");
            const response = await fetch(Routes.Coach.getTickets(coach_id), {
                method: "GET",
            });
            const data = (await response.json());
            return data;
        },
        create: async (token, data) => {
            if (!token)
                throw new Error("You must provide an authorization token to this function.");
            const response = await fetch(Routes.Coach.create, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(data),
            });
            if (response.status !== 201) {
                const data = (await response
                    .json()
                    .catch(() => ({ message: "Unknown error" })));
                throw new APIError({
                    code: response.status,
                    api_message: data.message ?? "Unknown error",
                    path: Routes.Coach.create,
                    method: "POST",
                }, "The API responded with an error.");
            }
            return (await response.json());
        },
        update: async (token, id, data) => {
            if (!token)
                throw new Error("You must provide an authorization token to this function.");
            if (!id)
                throw new Error("You must provide a coach id to this function.");
            const response = await fetch(Routes.Coach.update(id), {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(data),
            });
            if (response.status !== 200) {
                const data = (await response
                    .json()
                    .catch(() => ({ message: "Unknown error" })));
                throw new APIError({
                    code: response.status,
                    api_message: data.message ?? "Unknown error",
                    path: Routes.Coach.update(id),
                    method: "PATCH",
                }, "The API responded with an error.");
            }
            return (await response.json());
        },
        /** This function will return either a boolean<true> result or throw an error. */
        delete: async (token, id) => {
            if (!token)
                throw new Error("You must provide an authorization token to this function.");
            if (!id)
                throw new Error("You must provide a coach id to this function.");
            const response = await fetch(Routes.Coach.delete(id), {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            if (response.status !== 200) {
                const data = (await response
                    .json()
                    .catch(() => ({ message: "Unknown error" })));
                throw new APIError({
                    code: response.status,
                    api_message: data.message ?? "Unknown error",
                    path: Routes.Coach.delete(id),
                    method: "DELETE",
                }, "The API responded with an error.");
            }
            return true;
        },
    },
    students: {
        get: async (id) => {
            if (!id)
                throw new Error("You must provide a student id to this function.");
            const response = await fetch(Routes.Student.get(id), { method: "GET" });
            return (await response.json());
        },
        create: async (token, data) => {
            if (!token)
                throw new Error("You must provide an authorization token to this function.");
            const response = await fetch(Routes.Student.create, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(data),
            });
            if (response.status !== 201) {
                const data = (await response
                    .json()
                    .catch(() => ({ message: "Unknown error" })));
                throw new APIError({
                    code: response.status,
                    api_message: data.message ?? "Unknown error",
                    path: Routes.Student.create,
                    method: "POST",
                }, "The API responded with an error.");
            }
            return (await response.json());
        },
        getTickets: async (id) => {
            if (!id)
                throw new Error("You must provide a student id to this function.");
            const response = await fetch(Routes.Student.getTickets(id), {
                method: "GET",
            });
            const tickets = await response.json();
            return tickets;
        },
    },
    tickets: {
        get: async (id) => {
            if (!id)
                throw new Error("You must provide a ticket id to this function.");
            const response = await fetch(Routes.Tickets.get(id), { method: "GET" });
            return (await response.json());
        },
        create: async (token, data) => {
            if (!token)
                throw new Error("You must provide an authorization token to this function.");
            const response = await fetch(Routes.Tickets.create, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(data),
            });
            if (response.status !== 201) {
                const data = (await response
                    .json()
                    .catch(() => ({ message: "Unknown error" })));
                throw new APIError({
                    code: response.status,
                    api_message: data.message ?? "Unknown error",
                    path: Routes.Tickets.create,
                    method: "POST",
                }, "The API responded with an error.");
            }
            return (await response.json());
        },
        update: async (token, id, data) => {
            if (!token)
                throw new Error("You must provide an authorization token to this function.");
            if (!id)
                throw new Error("You must provide a ticket id to this function.");
            const response = await fetch(Routes.Tickets.update(id), {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(data),
            });
            if (response.status !== 200) {
                const data = (await response
                    .json()
                    .catch(() => ({ message: "Unknown error" })));
                throw new APIError({
                    code: response.status,
                    api_message: data.message ?? "Unknown error",
                    path: Routes.Tickets.update(id),
                    method: "PATCH",
                }, "The API responded with an error.");
            }
            return (await response.json());
        },
        delete: async (token, id) => {
            if (!token)
                throw new Error("You must provide an authorization token to this function.");
            if (!id)
                throw new Error("You must provide a ticket id to this function.");
            const response = await fetch(Routes.Tickets.delete(id), {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            if (response.status !== 200) {
                const data = (await response
                    .json()
                    .catch(() => ({ message: "Unknown error" })));
                throw new APIError({
                    code: response.status,
                    api_message: data.message ?? "Unknown error",
                    path: Routes.Tickets.delete(id),
                    method: "DELETE",
                }, "The API responded with an error.");
            }
            return (await response.json());
        },
        claim: async (token, id, coach_id) => {
            if (!token)
                throw new Error("You must provide an authorization token to this function.");
            if (!id)
                throw new Error("You must provide a ticket id to this function.");
            if (!coach_id)
                throw new Error("You must provide a coach id to this function.");
            const response = await fetch(Routes.Tickets.claim(id, coach_id), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            if (response.status !== 200) {
                const data = (await response
                    .json()
                    .catch(() => ({ message: "Unknown error" })));
                throw new APIError({
                    code: response.status,
                    api_message: data.message ?? "Unknown error",
                    path: Routes.Tickets.claim(id, coach_id),
                    method: "POST",
                }, "The API responded with an error.");
            }
            return (await response.json());
        },
    },
};
