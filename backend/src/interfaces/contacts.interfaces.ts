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
