import { Request, Response } from "express";
import { ISessionRequest } from "../interfaces/session.interfaces";
import sessionService from "../services/session/session.service";

export const sessionController = async (req: Request, res: Response) => {
  const dataSession: ISessionRequest = req.body;
  const session = await sessionService(dataSession);

  return res.status(200).json(session);
};
