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

  sendMail(mailOptions) {
    return this.transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }

  //after signUp a mail requesting user to verify account can be sent using this method
  sendSignupMail(userEmail, userName) {
    const mailOptions = {
      from: `"Future Funds" <${process.env.EMAIL_ADDRESS}>`, // sender address
      to: userEmail, // list of receivers
      subject: 'Verify your feautre Funds Account', // Subject line
      html: `<h1>Hi ${userName} </h1>` // plain text body
    };
    this.sendMail(mailOptions);
  }
}


module.exports = new Mailer();
