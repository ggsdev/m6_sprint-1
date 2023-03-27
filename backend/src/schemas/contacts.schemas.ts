import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ICreateContactRequest,
  IUpdateContactRequest,
} from "../interfaces/contacts.interfaces";

const contactCreateSchema: SchemaOf<ICreateContactRequest> = yup
  .object()
  .shape({
    fullName: yup.string().label("contact_name").required(),
    email: yup.string().email().required(),
    cellphone: yup.string().required(),
  });

const contactResponseSchema: SchemaOf<ICreateContactRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    email: yup.string().email().label("contact_email"),
    cellphone: yup.string().label("contact_phone"),
  });

const contactUpdateSchema: SchemaOf<IUpdateContactRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    email: yup.string().email(),
    cellphone: yup.string(),
  });

export { contactCreateSchema, contactUpdateSchema, contactResponseSchema };
