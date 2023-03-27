import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";
import {
  ICreateContactRequest,
  ICreateContactResponse,
} from "../../interfaces/contacts.interfaces";

export const createContactService = async (
  dataContact: ICreateContactRequest,
  userId: string
): Promise<ICreateContactResponse> => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOneBy({
    id: userId,
  });

  const contactsRepository = AppDataSource.getRepository(Contact);

  const contact = contactsRepository.create({ ...user, ...dataContact });
  await contactsRepository.save(contact);

  return contact;
};
