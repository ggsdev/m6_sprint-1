import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/user.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";
import { validateUserPermissionsMiddleware } from "../middlewares/validateUserPermissions.middleware";
import { validatedBodyMiddleware } from "../middlewares/validatedData.middleware";
import { userRequestSchema, userUpdateSchema } from "../schemas/users.schemas";
import {
  createContactController,
  getAllContactsController,
} from "../controllers/contact.controller";
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
  validateUserPermissionsMiddleware,
  validatedBodyMiddleware(userUpdateSchema),
  updateUserController
);

UserRouter.delete(
  "/:id",
  authTokenMiddleware,
  userExistsMiddleware,
  validateUserPermissionsMiddleware,
  deleteUserController
);

UserRouter.get(
  "/:id/contacts",
  authTokenMiddleware,
  userExistsMiddleware,
  validateUserPermissionsMiddleware,
  getAllContactsController
);

UserRouter.post(
  "/:id/contacts",
  authTokenMiddleware,
  userExistsMiddleware,
  validateUserPermissionsMiddleware,
  validatedBodyMiddleware(contactCreateSchema),
  createContactController
);

export default UserRouter;
