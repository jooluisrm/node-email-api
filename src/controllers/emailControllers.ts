import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {



    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "7ac7f622ba19c8",
            pass: "b6336003b57c8c"
        }
    });

    let message = {
        from: 'nao-responda@b7web.com.br',
        to: 'teste@gmail.com',
        repleyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    }

    let info = await transport.sendMail(message);
    console.log(info);

    res.json({ success: true });
}