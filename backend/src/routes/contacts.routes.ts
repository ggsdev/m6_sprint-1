import { Router } from "express";
import {
  deleteContactController,
  updateContactController,
} from "../controllers/contact.controller";
import {
  authTokenMiddleware,
  contactExistsMiddleware,
  contactOwnerVerifyMiddleware,
  validatedBodyMiddleware,
} from "../middlewares/_index";
import { contactUpdateSchema } from "../schemas/_index";
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
