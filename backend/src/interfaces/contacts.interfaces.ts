import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";

export interface ICreateContactRequest {
  fullName: string;
  email: string;
  cellphone: string;
}

export interface ICreateContactResponse {
  id: string;
  fullName: string;
  cellphone: string;
  email: string;
  user: User;
}

export interface IContactResponse {
  user: {
    user_id: string;
    user_name: string;
    user_email: string;
  };
  contacts: Contact[];
}

export interface IUpdateContactRequest {
  fullName?: string;
  cellphone?: string;
  email?: string;
}

export interface IUpdateContactResponse {
  id: string;
  fullName: string;
  cellphone: string;
  email: string;
  user: User;
}
