import { Request, Response } from "express";

export const report = async (req: Request, res: Response) => {
	return new Promise(() => {
		console.log("a");
	});
};
