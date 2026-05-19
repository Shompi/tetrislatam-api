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
};
