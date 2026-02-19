import { NOTFOUND } from "node:dns";

export class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "HttpError";
        this.statusCode = statusCode;
    }
}

export class HttpForbiddenError extends HttpError {
    constructor(message = "forbidden") {
        super(message, httpStatusCodes.FORBIDDEN);
    }
}

export class HttpNotFoundError extends HttpError {
    constructor(message = "ressource not found") {
        super(message, httpStatusCodes.NOT_FOUND);
    }
}

export class HttpBadRequestError extends HttpError {
    constructor(message = "ba request") {
        super(message, httpStatusCodes.BAD_REQUEST);
    }
}

export class HttpUnauthorized extends HttpError {
    constructor(message = "Unauthorized") {
        super(message, httpStatusCodes.UNAUTHORIZED);
    }
}

export class HttpInternalServerErrors extends HttpError {
    constructor(message = "internal server errors") {
        super(message, httpStatusCodes.INTERNAL_SERVER_ERRORS);
    }
}

export class HttpRedirectionError extends HttpError {
    constructor(message = "redirection") {
        super(message, httpStatusCodes.REDIRECTION);
    }
}

export class HttpConflictError extends HttpError {
    constructor(message = "conflict") {
        super(message, httpStatusCodes.CONFLICT);
    }
}

export const httpStatusCodes = {
    OK: 200,
    CREATED: 201,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
    REDIRECTION: 302 ,
    INTERNAL_SERVER_ERROR: 500,
    CONFLICT: 409
}

