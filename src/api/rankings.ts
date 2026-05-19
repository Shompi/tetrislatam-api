type RankingQueryParams = {
  /**
   * The TWO LETTER country code
   * @example "CL"
   */
  country: string

  /**
   * Whether to include players in the leaderboards
   */
  with_players: boolean

  /**
   * Whether to precalculate data of the players (apm, vs, pps and rank variations)
   */
  precalculate: boolean

  /**
   * Whether to include the old leaderboard
   * The one this leaderboard is being compared to. 
   */
  include_old: boolean
}

type LeaderboardPlayer = {
  _id: string
  rank_tr: number
  rank_glicko: number
  username: string
  country: string
  league: {
    glicko: number
    tr: number
    rank: string
    apm: number
    pps: number
    vs: number
  },

}

type LeaderboardSums = {
  by_tr: {
    tr: number
    apm: number
    pps: number
    vs: number
  }
  by_glicko: {
    glicko: number
    apm: number
    pps: number
    vs: number
  }
}

type LeaderboardVariations = {
  tr: number
  glicko: number
}

type CountryLeaderboard = {
  key: number
  country: string
  last_updated: string
  player_count: number
  left_leaderboard: LeaderboardPlayer[]
  joined_leaderboard: LeaderboardPlayer[]
  total_tr: number
  total_glicko: number

  /** Only included if `with_players = true` is passed to the query options */
  players?: LeaderboardPlayer[]

  /** Only included if `precalculate = true` is passed to the query options */
  sums?: {
    top_10: LeaderboardSums
    top_25: LeaderboardSums
    top_100: LeaderboardSums
  },

  /** Only included if `precalculate = true` is passed to the query options */
  variations?: {
    top_10: LeaderboardVariations
    top_25: LeaderboardVariations
    top_100: LeaderboardVariations
  }
}

type RankingLeaderboardResponse = {
  latestLeaderboards: CountryLeaderboard[]
  oldLeaderboards?: CountryLeaderboard[]
}