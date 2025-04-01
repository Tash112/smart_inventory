"use strict";
// responseHelper.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.forbiddenResponse = exports.unauthorizedResponse = exports.notFoundResponse = exports.validationErrorResponse = exports.errorResponse = exports.createdResponse = exports.successResponse = void 0;
const successResponse = (res, message, data = null) => {
    return res.status(200).json({
        status: 'success',
        message: message,
        data: data,
    });
};
exports.successResponse = successResponse;
const createdResponse = (res, message, data = null) => {
    return res.status(201).json({
        status: 'success',
        message: message,
        data: data,
    });
};
exports.createdResponse = createdResponse;
const errorResponse = (res, message, errorCode = 400) => {
    return res.status(errorCode).json({
        status: 'error',
        message: message,
        errorCode: errorCode,
    });
};
exports.errorResponse = errorResponse;
const validationErrorResponse = (res, errors) => {
    return res.status(422).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors, // Pass the list of validation errors
    });
};
exports.validationErrorResponse = validationErrorResponse;
const notFoundResponse = (res, message) => {
    return res.status(404).json({
        status: 'error',
        message: message,
    });
};
exports.notFoundResponse = notFoundResponse;
const unauthorizedResponse = (res, message) => {
    return res.status(401).json({
        status: 'error',
        message: message,
    });
};
exports.unauthorizedResponse = unauthorizedResponse;
const forbiddenResponse = (res, message) => {
    return res.status(403).json({
        status: 'error',
        message: message,
    });
};
exports.forbiddenResponse = forbiddenResponse;
