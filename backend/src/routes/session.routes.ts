import Router from "express";
import { sessionController } from "../controllers/session.controllers";
import validatedBodyMiddleware from "../middlewares/validatedData.middleware";
// import { sessionSchema } from "../schemas/session/session.schemas";

const sessionRouter = Router();

sessionRouter.post(
  "",
  // validatedBodyMiddleware(sessionSchema),
  sessionController
);

export default sessionRouter;
