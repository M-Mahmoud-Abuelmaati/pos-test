import httpStatus from "./httpStatus";

export const validationError = {
  httpStatus: httpStatus.BAD_REQUEST,
  code: `01`,
  msg: "Request validation error",
};

export const internalServerError = {
  httpStatus: httpStatus.INTERNAL_SERVER_ERROR,
  code: httpStatus.INTERNAL_SERVER_ERROR,
  msg: "Internal server error.",
};
