import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/user.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";
import { validateUserPermissionsMiddlewere } from "../middlewares/validateUserPermissions.middleware";
import validatedBodyMiddleware from "../middlewares/validatedData.middleware";
import { userRequestSchema, userUpdateSchema } from "../schemas/users.schemas";
import { createContactController } from "../controllers/contact.controller";
import { contactCreateSchema } from "../schemas/contacts.schemas";

const UserRouter = Router();

UserRouter.post(
  "",
  validatedBodyMiddleware(userRequestSchema),
  createUserController
);

UserRouter.get("", authTokenMiddleware, getAllUsersController);

UserRouter.patch(
  "/:id",
  authTokenMiddleware,
  userExistsMiddleware,
  validateUserPermissionsMiddlewere,
  validatedBodyMiddleware(userUpdateSchema),
  updateUserController
);

UserRouter.delete(
  "/:id",
  authTokenMiddleware,
  userExistsMiddleware,
  validateUserPermissionsMiddlewere,
  deleteUserController
);

UserRouter.post(
  "/:id/contacts",
  userExistsMiddleware,
  validatedBodyMiddleware(contactCreateSchema),
  createContactController
);

export default UserRouter;
