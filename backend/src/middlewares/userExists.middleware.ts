import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

export const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  const usersRepository = AppDataSource.getRepository(User);
  const userExists = await usersRepository.findOneBy({ id: userId });

  if (!userExists) {
    return res.status(404).json({ message: "User not found." });
  }

  next();
};
