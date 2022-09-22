import { prisma } from '../PrismaClient';
import { Request, Response } from "express";

export default class UserController {
  public async getUsers (request: Request, response: Response) {
    const allUsers = await prisma.user.findMany()
    return response.status(200).send({ allUsers })
  }
}