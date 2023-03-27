import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";
import { ICreateContactRequest } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../globalError";

export const createContactService = async (
  dataContact: ICreateContactRequest,
  user: User
) => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const contactExists = await contactsRepository.findOneBy({
    email: dataContact.email,
    cellphone: dataContact.cellphone,
  });

  if (contactExists) {
    throw new AppError(
      `Contact with email ${contactExists.email} or cellphone ${contactExists.cellphone} already exists.`
    );
  }

  const contact = contactsRepository.create({ ...dataContact, user });
  await contactsRepository.save(contact);

  const {
    user: { password: _, ...userWithoutPassword },
    ...contactInfo
  } = contact;

  return { contact: contactInfo, user: userWithoutPassword };
};
