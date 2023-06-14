import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import { AppError } from "./shared/errors/AppError";

import "./shared/container";
import "./database";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const door = 3333;
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      mesasge: `Internal server errror - ${err.message}`,
    });
  }
);
app.listen(3333, () =>
  console.log(
    `\nAPI URL: http://localhost:${door}
    \nSwagger: http://localhost:${door}/api-docs`
  )
);
