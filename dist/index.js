import { CoachingAPI } from "./api/coaching.js";
import { EventsAPI } from "./api/events.js";
import { RankingsAPI } from "./api/rankings.js";
import { StatusAPI } from "./api/status.js";
import { WebpagePostsAPI } from "./api/webposts.js";
export const TMLAPI = {
    status: StatusAPI,
    events: EventsAPI,
    webposts: WebpagePostsAPI,
    ranking: RankingsAPI,
    coaching: CoachingAPI,
};
