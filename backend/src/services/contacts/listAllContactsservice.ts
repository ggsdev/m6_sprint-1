import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { ICreateContactResponse } from "../../interfaces/contacts.interfaces";

export const listAllContactsService = async (): Promise<
  ICreateContactResponse[]
> => {
  const contactsRepository = AppDataSource.getRepository(Contact);
  return await contactsRepository.find({ relations: { user: true } });
};
