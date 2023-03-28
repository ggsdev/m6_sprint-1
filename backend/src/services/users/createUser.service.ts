import {
  IDataUserRequest,
  IDataUserResponse,
} from "../../interfaces/users.interfaces";
import { AppError } from "../../globalError";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const createUserService = async (
  dataUser: IDataUserRequest
): Promise<IDataUserResponse> => {
  const usersRepository = AppDataSource.getRepository(User);
  const findUser = await usersRepository.findOne({
    where: { email: dataUser.email },
    withDeleted: true,
  });
  if (findUser) {
    throw new AppError("Email already exists", 409);
  }

  const user = usersRepository.create(dataUser);
  await usersRepository.save(user);

  return user;
};

export default createUserService;
