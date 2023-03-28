import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

export const deleteContactService = async (
  contactId: string
): Promise<void> => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  await contactsRepository.delete(contactId);
};
