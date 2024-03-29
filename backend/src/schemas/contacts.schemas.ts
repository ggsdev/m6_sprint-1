import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ICreateContactRequest,
  IUpdateContactRequest,
} from "../interfaces/contacts.interfaces";

const contactCreateSchema: SchemaOf<ICreateContactRequest> = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    cellphone: yup.string().length(9).required(),
  });

const contactUpdateSchema: SchemaOf<IUpdateContactRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    email: yup.string().email(),
    cellphone: yup.string().length(9),
  });

export { contactCreateSchema, contactUpdateSchema };
