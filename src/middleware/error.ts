import { ErrorTypes, errorCatalog } from '../error/catalog';

import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (
  err: Error,
  _req,
  res,
  _next,
) => {
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;

  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {

    const { httpStatus, error } = mappedError;
    return res.status(httpStatus).json({ error });
  }
  console.error(err);
  return res.status(500).json({ message: 'internal server error' });
};

export default errorHandler;