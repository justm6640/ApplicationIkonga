import { NextFunction, Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export interface ApiError extends Error {
  status?: number;
  details?: unknown;
}

export const errorHandler = (
  err: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  const status = err.status ?? StatusCodes.INTERNAL_SERVER_ERROR;

  return res.status(status).json({
    status,
    error: err.message || getReasonPhrase(status),
    details: err.details ?? null
  });
};
