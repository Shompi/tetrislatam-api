import { CoachingAPI } from "./api/coaching.ts"
import { EventsAPI } from "./api/events.ts"
import { RankingsAPI } from "./api/rankings.ts"
import { StatusAPI } from "./api/status.ts"
import { WebpagePostsAPI } from "./api/webposts.ts"

export const TMLAPI = {
  status: StatusAPI,
  events: EventsAPI,
  webposts: WebpagePostsAPI,
  ranking: RankingsAPI,
  coaching: CoachingAPI,
}

export type {
  APICoach,
  APICoachCreationData,
  APICoachSocial,
  APICoachUpdateData,
  APICoachingTicket,
  APICoachingTicketCreationData,
  APICoachingTicketPatchData,
  APISocialCreationData,
  APIStudent,
  APIStudentCreationData,
} from "./api/coaching.ts"

export type {
  APIEvent,
  EventCreationData,
  EventPatchData,
  EventsQueryParams
} from "./api/events.ts"

export type {
  BaseCountryLeaderboard,
  BaseLeaderboardPlayer,
  CountryLeaderboard,
  LeaderboardPlayer,
  LeaderboardSums,
  LeaderboardVariations,
  RankingLeaderboardResponse,
  RankingQueryParams
} from "./api/rankings.ts"
export type {

} from "./api/status.ts"
export type {
  APIWebpageEditData,
  APIWebpagePostCreationData,
  APIWebpagePost,
  WebpagePostsQueryParams
} from "./api/webposts.ts"