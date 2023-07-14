import { NextFunction, Request, Response } from "express";
import { ObjectSchema, ValidationErrorItem } from "joi";
import { pick } from "lodash";
import { validationError } from "../constants";

export default (schema: ObjectSchema) =>
  (req: Request, _res: Response, next: NextFunction) => {
    // Picking Params & Query & Body from the Request
    const validationData = pick(req, ["params", "query", "body"]);
    // Validating data with the schema provided
    const result = schema.unknown(true).validate(validationData, {
      abortEarly: false,
    });

    if (result.error) {
      const errors = result.error.details.flatMap(
        (val: ValidationErrorItem) => {
          return {
            message: val.message.split('"').join(""),
            path: val.context?.label,
          };
        },
      );
      // Returning an object with bad request so that error handler middleware catches it
      next({ ...validationError, errors });
    }
    next();
  };
