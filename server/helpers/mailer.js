require('dotenv').config();
const nodeMailer = require('nodemailer');

//defining transporter for sending mail
const transporter = nodeMailer.createTransport({
  service: process.env.EMAIL_SERVICE_PROVIDER,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
});

class Mailer {
  constructor() {
    this.transporter = transporter;
  }

  sendMail(userEmail, userFirstName, token, mailOptions) {
    const transporter = this.transporter;
    mailOptions = mailOptions(userEmail, userFirstName, token);
    return new Promise(function(resolve, reject) {
      transporter.sendMail(mailOptions, function(err, info) {
        if (err) reject(err);
        else resolve(info);
      });
    });
  }
}

module.exports = new Mailer();
