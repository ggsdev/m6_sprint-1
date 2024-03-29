import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IContactResponse } from "../../interfaces/contacts.interfaces";

export const listAllContactsService = async (
  userId: string
): Promise<IContactResponse> => {
  const contactsRepository = AppDataSource.getRepository(User);
  const { password, name, email, id, contacts, ...userWithoutPassword } =
    await contactsRepository.findOne({
      where: { id: userId },
      relations: { contacts: true },
    });

  const returnedData = {
    user: {
      user_id: id,
      user_email: email,
      user_name: name,
      ...userWithoutPassword,
    },
    contacts,
  };

  return returnedData;
};
