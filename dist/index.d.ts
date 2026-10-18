export declare const TMLAPI: {
    status: {
        get: () => Promise<{
            message: string;
            code: 418;
            date: string;
            data: {
                uptime: number;
                node_version: string;
                bun_version: string;
                platform: string;
                arch: string;
                memory_usage: {
                    rss: number;
                    heapTotal: number;
                    heapUsed: number;
                    external: number;
                    arrayBuffers: number;
                };
            };
        }>;
    };
    events: {
        getAll: (params?: import("./api/events.ts").EventsQueryParams) => Promise<import("./api/events.ts").APIEvent[]>;
        getOne: (eventId: string) => Promise<import("./api/events.ts").APIEvent>;
        create: (token: string, data: import("./api/events.ts").EventCreationData) => Promise<import("./api/events.ts").APIEvent>;
        edit: (token: string, eventId: string, data: import("./api/events.ts").EventPatchData) => Promise<import("./api/events.ts").APIEvent>;
        delete: (token: string, eventId: string) => Promise<import("./api/events.ts").APIEvent>;
    };
    webposts: {
        get: (params?: import("./api/webposts.ts").WebpagePostsQueryParams) => Promise<import("./api/webposts.ts").APIWebpagePost[]>;
        create: (token: string, data: import("./api/webposts.ts").APIWebpagePostCreationData) => Promise<import("./api/webposts.ts").APIWebpagePost>;
        edit: (token: string, id: string, data: import("./api/webposts.ts").APIWebpageEditData) => Promise<import("./api/webposts.ts").APIWebpagePost>;
        delete: (token: string, id: string) => Promise<import("./api/webposts.ts").APIWebpagePost>;
    };
    ranking: {
        get: <T extends import("./api/rankings.ts").RankingQueryParams = {}>(params?: T & import("./api/rankings.ts").RankingQueryParams) => Promise<import("./api/rankings.ts").RankingLeaderboardResponse<T>>;
    };
    coaching: {
        coaches: {
            getAll: () => Promise<import("./api/coaching.ts").APICoach[]>;
            get: (id: string) => Promise<import("./api/coaching.ts").APICoach>;
            getTickets: (coach_id: string) => Promise<import("./api/coaching.ts").APICoachingTicket[]>;
            create: (token: string, data: import("./api/coaching.ts").APICoachCreationData) => Promise<import("./api/coaching.ts").APICoach>;
            update: (token: string, id: string, data: import("./api/coaching.ts").APICoachUpdateData) => Promise<import("./api/coaching.ts").APICoach>;
            delete: (token: string, id: string) => Promise<boolean>;
        };
        students: {
            get: (id: string) => Promise<import("./api/coaching.ts").APIStudent>;
            create: (token: string, data: import("./api/coaching.ts").APIStudentCreationData) => Promise<import("./api/coaching.ts").APIStudent>;
            getTickets: (id: string) => Promise<{
                student: import("./api/coaching.ts").APIStudent;
                tickets: import("./api/coaching.ts").APICoachingTicket[];
            }>;
        };
        tickets: {
            get: (id: string) => Promise<import("./api/coaching.ts").APICoachingTicket>;
            create: (token: string, data: import("./api/coaching.ts").APICoachingTicketCreationData) => Promise<import("./api/coaching.ts").APICoachingTicket>;
            update: (token: string, id: string, data: import("./api/coaching.ts").APICoachingTicketPatchData) => Promise<import("./api/coaching.ts").APICoachingTicket>;
            delete: (token: string, id: string) => Promise<import("./api/coaching.ts").APICoachingTicket>;
            claim: (token: string, id: string, coach_id: string) => Promise<import("./api/coaching.ts").APICoachingTicket>;
        };
    };
};
export type { APICoach, APICoachCreationData, APICoachSocial, APICoachUpdateData, APICoachingTicket, APICoachingTicketCreationData, APICoachingTicketPatchData, APISocialCreationData, APIStudent, APIStudentCreationData, } from "./api/coaching.ts";
export type { APIEvent, EventCreationData, EventPatchData, EventsQueryParams } from "./api/events.ts";
export type { BaseCountryLeaderboard, BaseLeaderboardPlayer, CountryLeaderboard, LeaderboardPlayer, LeaderboardSums, LeaderboardVariations, RankingLeaderboardResponse, RankingQueryParams } from "./api/rankings.ts";
export type {} from "./api/status.ts";
export type { APIWebpageEditData, APIWebpagePostCreationData, APIWebpagePost, WebpagePostsQueryParams } from "./api/webposts.ts";
//# sourceMappingURL=index.d.ts.map