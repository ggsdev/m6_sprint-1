import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userToDelete: string): Promise<void> => {
  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOneBy({ id: userToDelete });

  await usersRepository.softRemove(user);
  user.isActive = false;
  await usersRepository.save(user);
};

export default deleteUserService;
