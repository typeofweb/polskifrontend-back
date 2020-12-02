import nodemailer from 'nodemailer';
import config from '../config';

const transporter = nodemailer.createTransport(config.nodemailer);

export default function sendEmail(body, replyTo, subject = '[polskifrontend] Nowa prośba o dodanie bloga!') {
  const options = {
    from: 'polskifrontend@typeofweb.com',
    to: 'hi@typeofweb.com',
    replyTo,
    subject,
    html: body
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        reject({ success: false, message: error });
      }

      resolve({ success: true, message: info });
    });
  });
}
