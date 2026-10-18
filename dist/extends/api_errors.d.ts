type BaseError = {
    code: number;
    api_message: string;
    path: string;
    method: string;
};
export declare class APIError extends Error {
    code: number;
    api_message: string;
    path: string;
    method: string;
    constructor({ code, api_message, path, method }: BaseError, message: string);
}
export {};
//# sourceMappingURL=api_errors.d.ts.map