import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = (req: Request, res: Response) => {
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "7ac7f622ba19c8",
            pass: "****7c8c"
        }
    });



    res.json({ pong: true });
}