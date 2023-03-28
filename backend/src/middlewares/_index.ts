import { authTokenMiddleware } from "./authToken.middleware";
import { contactExistsMiddleware } from "./contactExists.middleware";
import { contactOwnerVerifyMiddleware } from "./contactOwnerVerify.middleware";
import { userExistsMiddleware } from "./userExists.middleware";
import { validateUserPermissionsMiddleware } from "./validateUserPermissions.middleware";
import { validatedBodyMiddleware } from "./validatedData.middleware";

export {
  authTokenMiddleware,
  contactExistsMiddleware,
  contactOwnerVerifyMiddleware,
  userExistsMiddleware,
  validateUserPermissionsMiddleware,
  validatedBodyMiddleware,
};
