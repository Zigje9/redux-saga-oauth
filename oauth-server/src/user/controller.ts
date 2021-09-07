import { Request, Response } from 'express';

export const authentication = (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(200).json('h');
};
