import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "./shared/container";
import "./database";

import swaggerFile from "./swagger.json";
import { router } from "./routes";

const app = express();
const door = 3333;
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
app.listen(3333, () =>
  console.log(
    `\nAPI URL: http://localhost:${door}
    \nSwagger: http://localhost:${door}/api-docs`
  )
);
