import { Router } from "express";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import validatedBodyMiddleware from "../middlewares/validatedData.middleware";
import {
  deleteContactController,
  updateContactController,
} from "../controllers/contact.controller";
import { contactExistsMiddleware } from "../middlewares/contactExists.middleware";
import { contactUpdateSchema } from "../schemas/contacts.schemas";
import { contactOwnerVerifyMiddleware } from "../middlewares/contactOwnerVerify.middleware";

const ContactRouter = Router();

ContactRouter.patch(
  "/:id",
  authTokenMiddleware,
  contactExistsMiddleware,
  contactOwnerVerifyMiddleware,
  validatedBodyMiddleware(contactUpdateSchema),
  updateContactController
);

ContactRouter.delete(
  "/:id",
  authTokenMiddleware,
  contactExistsMiddleware,
  contactOwnerVerifyMiddleware,
  deleteContactController
);

export default ContactRouter;
