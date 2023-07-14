import { NextFunction, Request, Response } from "express";
import { IErrorType } from "../types";
import { internalServerError } from "../constants";

export default {
  default: (err: string) => {
    console.log(err);
    process.exit(1);
  },

  middleware: (
    err: {
      httpStatus: number;
      code: string | number;
      msg: string;
      args: { message: string; path: string }[];
    },
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    let error: Partial<IErrorType> | typeof err = err.msg
      ? err
      : internalServerError;
    const { httpStatus, ...body } = error;
    res.status(400).json(body);
  },
};
