import { Request, Response } from 'express';
import * as service from './service';

export const authentication = async (req: Request, res: Response) => {
  const { code, state, site } = req.body;
  const accessToken = await service.getAccessToken(code, state, site);
  return res.status(200).json({ token: accessToken });
};
