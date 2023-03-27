import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";
import { ICreateContactRequest } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../globalError";

export const createContactService = async (
  dataContact: ICreateContactRequest,
  userId: string
) => {
  const usersRepository = AppDataSource.getRepository(User);

  const findUser = await usersRepository.findOneBy({
    id: userId,
  });

  const contactsRepository = AppDataSource.getRepository(Contact);

  const emailExists = await contactsRepository.findOneBy({
    email: dataContact.email,
  });

  if (emailExists)
    throw new AppError(
      `Contact with: ${emailExists.email} email already exists.`
    );

  const numberExists = await contactsRepository.findOneBy({
    cellphone: dataContact.cellphone,
  });

  if (numberExists)
    throw new AppError(
      `Contact with: ${numberExists.cellphone} number already exists.`
    );

  const contact = contactsRepository.create({ ...dataContact, user: findUser });
  await contactsRepository.save(contact);

  const { password, ...userWithoutPassword } = contact.user; //fix it
  const { user, ...contactInfo } = contact;

  return { contact: contactInfo, user: userWithoutPassword };
};
