import { Request, Response } from "express";
import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";
import {
  ICreateContactRequest,
  IUpdateContactRequest,
} from "../interfaces/contacts.interfaces";
import { createContactService } from "../services/contacts/createContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listAllContactsService } from "../services/contacts/listAllContacts.service";
import { updateContactService } from "../services/contacts/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  const dataContact: ICreateContactRequest = req.body;
  const user: User = req.user;
  const contact = await createContactService(dataContact, user);
  return res.status(201).json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const dataContact: IUpdateContactRequest = req.body;
  const contactInRequest: Contact = req.contact;
  const contact = await updateContactService(contactInRequest, dataContact);
  return res.status(200).json(contact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  await deleteContactService(contactId);
  return res.status(204).json();
};

const getAllContactsController = async (req: Request, res: Response) => {
  const contacts = await listAllContactsService(req.params.id);
  return res.status(200).json(contacts);
};

export {
  createContactController,
  deleteContactController,
  getAllContactsController,
  updateContactController,
};
