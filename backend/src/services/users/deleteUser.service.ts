import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userToDelete: string): Promise<void> => {
  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOneBy({ id: userToDelete });

  await usersRepository.remove(user);
};

export default deleteUserService;
