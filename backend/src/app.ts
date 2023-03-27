import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { errorHandler } from "./globalError";
import UserRouter from "./routes/users.routes";
import sessionRouter from "./routes/session.routes";
import ContactRouter from "./routes/contacts.routes";

const app = express();
app.use(express.json());
app.use("/users", UserRouter);
app.use("/contacts", ContactRouter);
app.use("/session", sessionRouter);

app.use(errorHandler);

export default app;
