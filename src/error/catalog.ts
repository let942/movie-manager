export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  UnprocessableEntity = 'UnprocessableEntity',
}

type ErrorResponseObject = {
  error: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    error: 'Entity not found',
    httpStatus: 404,
  },
  UnprocessableEntity: {
    error: 'Unprocessable entity',
    httpStatus: 422,
  }
};
