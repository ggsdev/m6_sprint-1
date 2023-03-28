import Router from "express";
import { sessionController } from "../controllers/session.controllers";
import { validatedBodyMiddleware } from "../middlewares/_index";
import { sessionSchema } from "../schemas/_index";
const sessionRouter = Router();

sessionRouter.post(
  "",
  validatedBodyMiddleware(sessionSchema),
  sessionController
);

export default sessionRouter;
