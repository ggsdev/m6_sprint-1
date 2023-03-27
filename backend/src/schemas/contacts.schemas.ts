import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ICreateContactRequest,
  IUpdateContactRequest,
} from "../interfaces/contacts.interfaces";
import { userRequestSchema } from "./users.schemas";

const contactCreateSchema: SchemaOf<ICreateContactRequest> = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    cellphone: yup.string().required(),
  });

const contactResponseSchema: SchemaOf<ICreateContactRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    email: yup.string().email(),
    cellphone: yup.string(),
  });

const contactUpdateSchema: SchemaOf<IUpdateContactRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    email: yup.string().email(),
    cellphone: yup.string(),
  });

export { contactCreateSchema, contactUpdateSchema, contactResponseSchema };
