import { Contact } from "../entities/contact.entity";

export interface IDataUserRequest {
  name: string;
  password: string;
  email: string;
}

export interface IDataUserUpdateResponse {
  id: string;
  name: string;
  email: string;
  contacts: Contact[];
}

export interface IDataUserResponse {
  id: string;
  name: string;
  email: string;
  contacts: Contact[];
}

export interface IUpdateUserRequest {
  name?: string;
  password?: string;
  email?: string;
}
