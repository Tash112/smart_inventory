// responseHelper.ts

interface SuccessResponseData {
    status: string;
    message: string;
    data?: any;  // optional, the data to include with the success response
}

interface ErrorResponseData {
    status: string;
    message: string;
    errorCode: number;  // Optional, specify the error code if needed (default 400)
}

const successResponse = (res: any, message: string, data: any = null) => {
    return res.status(200).json({
        status: 'success',
        message: message,
        data: data,
    });
};

const createdResponse = (res: any, message: string, data: any = null) => {
    return res.status(201).json({
        status: 'success',
        message: message,
        data: data,
    });
};

const errorResponse = (res: any, message: string, errorCode: number = 400) => {
    return res.status(errorCode).json({
        status: 'error',
        message: message,
        errorCode: errorCode,
    });
};

const validationErrorResponse = (res: any, errors: any[]) => {
    return res.status(422).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors,  // Pass the list of validation errors
    });
};

const notFoundResponse = (res: any, message: string) => {
    return res.status(404).json({
        status: 'error',
        message: message,
    });
};

const unauthorizedResponse = (res: any, message: string) => {
    return res.status(401).json({
        status: 'error',
        message: message,
    });
};

const forbiddenResponse = (res: any, message: string) => {
    return res.status(403).json({
        status: 'error',
        message: message,
    });
};

export {
    successResponse,
    createdResponse,
    errorResponse,
    validationErrorResponse,
    notFoundResponse,
    unauthorizedResponse,
    forbiddenResponse
};
