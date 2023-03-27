import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { errorHandler } from "./globalError";
import UserRouter from "./routes/users.routes";

const app = express();
app.use(express.json());
app.use("/users", UserRouter);
app.use("/contacts", UserRouter);

app.use(errorHandler);

export default app;
