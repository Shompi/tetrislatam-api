export type RankingQueryParams = {
    country?: string;
    with_players?: boolean;
    precalculate?: boolean;
    include_old?: boolean;
};
export type LeaderboardSums = {
    by_tr: {
        tr: number;
        apm: number;
        pps: number;
        vs: number;
    };
    by_glicko: {
        glicko: number;
        apm: number;
        pps: number;
        vs: number;
    };
};
export type LeaderboardVariations = {
    tr: number;
    glicko: number;
};
export type BaseLeaderboardPlayer = {
    _id: string;
    rank_tr: number;
    rank_glicko: number;
    username: string;
    country: string;
    league: {
        glicko: number;
        tr: number;
        rank: string;
        apm: number;
        pps: number;
        vs: number;
    };
};
export type BaseCountryLeaderboard = {
    key: number;
    country: string;
    last_updated: string;
    player_count: number;
    left_leaderboard: BaseLeaderboardPlayer[];
    joined_leaderboard: BaseLeaderboardPlayer[];
    total_tr: number;
    total_glicko: number;
};
export type LeaderboardPlayer<T extends RankingQueryParams> = BaseLeaderboardPlayer & (T["precalculate"] extends true ? {
    variations: {
        tr: number;
        glicko: number;
        pps: number;
        apm: number;
        vs: number;
    };
} : {});
export type CountryLeaderboard<T extends RankingQueryParams> = BaseCountryLeaderboard & (T["with_players"] extends true ? {
    players: LeaderboardPlayer<T>[];
} : {}) & (T["precalculate"] extends true ? {
    sums: {
        top_10: LeaderboardSums;
        top_25: LeaderboardSums;
        top_100: LeaderboardSums;
    };
    variations: {
        top_10: LeaderboardVariations;
        top_25: LeaderboardVariations;
        top_100: LeaderboardVariations;
    };
} : {});
export type RankingLeaderboardResponse<T extends RankingQueryParams> = {
    latestLeaderboards: CountryLeaderboard<T>[];
} & (T["include_old"] extends true ? {
    oldLeaderboards: CountryLeaderboard<T>[];
} : {});
export declare const RankingsAPI: {
    get: <T extends RankingQueryParams = {}>(params?: T & RankingQueryParams) => Promise<RankingLeaderboardResponse<T>>;
};
//# sourceMappingURL=rankings.d.ts.map