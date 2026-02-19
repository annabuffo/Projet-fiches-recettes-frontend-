import joi from "joi";
import {HttpError, httpStatusCodes } from "../errors/http.error.js";

export function notFoundMiddleware(req, res) {
    res
    .status(httpStatusCodes.NOT_FOUND)
    .json({error: "not found"});
}

export function errorMiddleware(err, req, res, _next) {
    console.log(err);

    if (err instanceof HttpError) {
        res 
        .status(err.statusCode)
        .json({error: err.message});
        return;
    }

    if  (err instanceof ValidationError) {
        res
        .status(err.statusCode)
        .json({error: "internal server error"})
    }

    res 
    .status(httpStatusCodes.INTERNAL_SERVER_ERROR)
    .json({error: "internal server error"});
}