import express from "express";

const logger = express.Router();

logger.use((req, _res, next) => {
  console.log(`Method: ${req.method} Path: ${req.path}`);
  next();
});

export default logger;
