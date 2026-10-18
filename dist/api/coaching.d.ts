export type APICoach = {
    id: string;
    name: string;
    about_me: string | null;
    is_active: boolean;
};
export type APICoachCreationData = {
    name: string;
    about_me?: string | null;
    is_active?: boolean;
};
export type APICoachUpdateData = Partial<Omit<APICoach, "id">>;
export type APICoachSocial = {
    id: string;
    /** The ID of the coach this social network belongs to */
    coach_id: string;
    /** The url to the profile of the coach for this social network */
    profile_url: string;
};
export type APISocialCreationData = {
    coach_id: string;
    profile_url: string;
};
export type APIStudent = {
    /** Discord ID or unique identifier for this student. */
    id: string;
    name: string;
};
export type APIStudentCreationData = APIStudent;
export type APICoachingTicket = {
    id: number;
    hash: string;
    student_id: string;
    coach_id: string | null;
    ingame_name: string;
    preferred_games: string[];
    target_skills: string[];
    comment: string | null;
    is_open: boolean;
    is_claimed: boolean;
    is_deleted: boolean;
    created_at: string;
    discord_channel: string | null;
    discord_message: string | null;
};
export type APICoachingTicketCreationData = Partial<Omit<APICoachingTicket, "id">> & {
    student_id: string;
    ingame_name: string;
};
export type APICoachingTicketPatchData = Partial<Omit<APICoachingTicket, "id">>;
export declare const CoachingAPI: {
    coaches: {
        getAll: () => Promise<APICoach[]>;
        get: (id: string) => Promise<APICoach>;
        getTickets: (coach_id: string) => Promise<APICoachingTicket[]>;
        create: (token: string, data: APICoachCreationData) => Promise<APICoach>;
        update: (token: string, id: string, data: APICoachUpdateData) => Promise<APICoach>;
        /** This function will return either a boolean<true> result or throw an error. */
        delete: (token: string, id: string) => Promise<boolean>;
    };
    students: {
        get: (id: string) => Promise<APIStudent>;
        create: (token: string, data: APIStudentCreationData) => Promise<APIStudent>;
        getTickets: (id: string) => Promise<{
            student: APIStudent;
            tickets: APICoachingTicket[];
        }>;
    };
    tickets: {
        get: (id: string) => Promise<APICoachingTicket>;
        create: (token: string, data: APICoachingTicketCreationData) => Promise<APICoachingTicket>;
        update: (token: string, id: string, data: APICoachingTicketPatchData) => Promise<APICoachingTicket>;
        delete: (token: string, id: string) => Promise<APICoachingTicket>;
        claim: (token: string, id: string, coach_id: string) => Promise<APICoachingTicket>;
    };
};
//# sourceMappingURL=coaching.d.ts.map