import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

export const contactOwnerVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.id;
  const contactId = req.params.id;

  const contactsRepository = AppDataSource.getRepository(Contact);
  const contact = await contactsRepository.findOneBy({ id: contactId });

  if (contact.user.id !== userId) {
    return res
      .status(403)
      .json({ message: "You don't have permission to do that." });
  }

  next();
};
