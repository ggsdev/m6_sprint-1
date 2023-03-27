import { NextFunction, Request, Response } from "express";
import { AppError } from "../globalError";

export const validateUserPermissionsMiddlewere = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userSession = req.id;

  if (req.params.id !== userSession) {
    throw new AppError("You are not able to do this action", 403);
  }

  next();
};
