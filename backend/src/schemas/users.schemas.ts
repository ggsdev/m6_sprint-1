import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IDataUserRequest,
  IDataUserResponse,
  IUpdateUserRequest,
} from "../interfaces/users.interfaces";

const userRequestSchema: SchemaOf<IDataUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const userUpdateSchema: SchemaOf<IUpdateUserRequest> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string(),
});

export { userRequestSchema, userUpdateSchema };
