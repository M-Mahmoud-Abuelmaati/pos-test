import "express-async-errors";

import { logger, errorHandler } from "./middlewares";

import cors from "cors";
import express from "express";
import http from "http";
import router from "./app/router";
import config from "./config";

// Creating an express app
const app = express();

const start = async () => {
  // middleware for logging
  app.use(logger);
  // Enable All CORS
  app.use(cors());
  // Body parser for html POST form
  app.use(express.urlencoded({ extended: false }));
  // Body parser for POST requests
  app.use(express.json({ limit: "10mb" }));

  // APIs available in the server
  app.use("/api", router);

  // Middleware for error handler
  app.use(errorHandler.middleware);

  const httpServer = http.createServer(app);

  // Listening for specific port
  httpServer.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`);
  });
};

start().catch(errorHandler.default);
