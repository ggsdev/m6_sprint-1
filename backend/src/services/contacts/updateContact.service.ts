import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import {
  IUpdateContactRequest,
  IUpdateContactResponse,
} from "../../interfaces/contacts.interfaces";

export const updateContactService = async (
  contactId: string,
  dataContact: IUpdateContactRequest
): Promise<IUpdateContactResponse> => {
  const contactsRepository = AppDataSource.getRepository(Contact);
  const contact = await contactsRepository.findOneBy({ id: contactId });

  const updatedContact = { ...contact, ...dataContact };

  await contactsRepository.save(updatedContact);

  return updatedContact;
};
