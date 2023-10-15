// src/controllers/User/User.ts
import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import usersjson from '../../resources/users.json';

export class UserController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Belum diimplementasikan");
  }

  public read(req: Request, res: Response): void {
    res.json(usersjson);
  }

  public update(req: Request, res: Response): void {
    throw new Error("Belum diimplementasikan");
  }

  public delete(req: Request, res: Response): void {
    throw new Error("Belum diimplementasikan");
  }
}
