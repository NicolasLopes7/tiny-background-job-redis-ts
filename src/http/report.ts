import { client } from "../database";
import { Request, Response } from "express";

export const report = async (req: Request, res: Response) => {
  const orders = await client.order.findMany({ where: {} });

  return res.json({ orders });
};
