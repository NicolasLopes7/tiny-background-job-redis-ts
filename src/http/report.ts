import { Request, Response } from "express";
import { reportQueue } from "../jobs/report";

export const report = async (req: Request, res: Response) => {
  if (!req.query?.authorization) {
    return res.sendStatus(401);
  }

  reportQueue.add({});

  return res.sendStatus(201);
};
