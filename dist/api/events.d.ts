export type APIErrorBase = {
    message: string;
};
export type APIEvent = {
    /** UUIDV4 string */
    readonly id: string;
    /** El nombre del evento */
    name: string;
    /** El lugar del evento */
    location: string | null;
    /** El tipo de lugar del evento (online, discord, irl) */
    location_type: string | null;
    /** El juego principal del evento */
    game: string | null;
    /**URL del post en la página */
    post_url: string | null;
    /** Si el evento es externo */
    external: boolean;
    /** URL externa del evento */
    external_url: string | null;
    /** La fecha del evento */
    date: string;
};
export type EventsQueryParams = {
    limit?: number;
    offset?: number;
};
export type EventCreationData = {
    /** String between 1 and 100 characters. */
    name: string;
    /**
     * Location of this event.
     * The api defaults this value to null if no location is provided
     * @default null
     */
    location?: string | null;
    /**
     * Location type of this event.
     * The api defaults this value to null if no location type is provided
     * @default null
     */
    location_type?: "online" | "discord" | "irl" | null;
    /**
     * Date of this event, has to be ISO 8601.
     * @required
     */
    date: string;
    /**
     * Game of this event.
     * The api defaults this value to null if no game is provided
     * @default null
     */
    game: "tec" | "tetrio" | "classictetris" | "cultris" | "irl" | "cultris2" | "ppt" | "ppt2" | "tgm1" | "tgm2" | "tgm3" | "tgm4";
    /**
     * Post URL of this event.
     * The api defaults this value to null if no post url is provided
     * @default null
     */
    post_url?: string | null;
    /**
     * External event.
     * The api defaults this value to false if no external is provided
     * @default false
     */
    external: boolean;
    /**
     * External URL of this event.
     * The api defaults this value to null if no external url is provided
     * @default null
     */
    external_url?: string | null;
};
export type EventPatchData = Partial<EventCreationData>;
export declare const EventsAPI: {
    /** Status endpoint of the API, it should always return a **418** response code */
    getAll: (params?: EventsQueryParams) => Promise<APIEvent[]>;
    getOne: (eventId: string) => Promise<APIEvent>;
    create: (token: string, data: EventCreationData) => Promise<APIEvent>;
    edit: (token: string, eventId: string, data: EventPatchData) => Promise<APIEvent>;
    /** This function returns the deleted event */
    delete: (token: string, eventId: string) => Promise<APIEvent>;
};
//# sourceMappingURL=events.d.ts.map