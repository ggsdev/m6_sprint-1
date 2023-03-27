import { Router } from "express";

import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";
import { validateUserPermissionsMiddlewere } from "../middlewares/validateUserPermissions.middleware";
import validatedBodyMiddleware from "../middlewares/validatedData.middleware";
import { userRequestSchema, userUpdateSchema } from "../schemas/users.schemas";
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  updateContactController,
} from "../controllers/contact.controller";
import { contactExistsMiddleware } from "../middlewares/contactExists.middleware";
import { contactUpdateSchema } from "../schemas/contacts.schemas";

const ContactRouter = Router();

ContactRouter.get("", authTokenMiddleware, getAllContactsController);

ContactRouter.patch(
  "/:id",
  authTokenMiddleware,
  contactExistsMiddleware,
  // validateUserPermissionsMiddlewere,
  validatedBodyMiddleware(contactUpdateSchema),
  updateContactController
);

ContactRouter.delete(
  "/:id",
  authTokenMiddleware,
  contactExistsMiddleware,
  // validateUserPermissionsMiddlewere,
  deleteContactController
);

export default ContactRouter;
