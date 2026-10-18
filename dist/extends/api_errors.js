export class APIError extends Error {
    constructor({ code, api_message, path, method }, message) {
        super(message);
        this.path = path;
        this.method = method;
        this.code = code;
        this.api_message = api_message;
    }
}
