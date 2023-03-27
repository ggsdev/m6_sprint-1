import { Request, Response } from "express";
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
  const userId: string = req.id;
  const contact = await createContactService(dataContact, userId);
  return res.status(201).json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const dataContact: IUpdateContactRequest = req.body;
  const contactId: string = req.params.id;
  const contact = await updateContactService(contactId, dataContact);
  return res.status(200).json(contact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  await deleteContactService(contactId);
  return res.status(204).json();
};

const getAllContactsController = async (req: Request, res: Response) => {
  const contacts = await listAllContactsService();
  return res.status(200).json(contacts);
};

export {
  createContactController,
  deleteContactController,
  getAllContactsController,
  updateContactController,
};
