import { NextFunction, Request, Response } from "express";
import { AppError } from "../globalError";

export const validateUserPermissionsMiddlewere = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userSession = req.user;

  if (req.params.id !== userSession.id) {
    throw new AppError("You are not able to do this action", 403);
  }

  next();
};
