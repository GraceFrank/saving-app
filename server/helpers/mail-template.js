function signupMailTemplate(userEmail, firstName, token) {
  return {
    from: `"Future Funds" <${process.env.EMAIL_ADDRESS}>`, // sender address
    to: userEmail, // list of receivers
    subject: 'Verify your Future Funds Account', // Subject line
    html: `<h1>Thank You for Future Funds</h1>
    <p>
    Hi ${firstName},
    <p>Your email has been added to an account on Future Funds. Please click on the following link to complete the verification process.</p>
    
    <p><a href="${
      process.env.API_HOST
      }/verify?${token}">Click here to verify your email</a></p>
    
    <p>Or, copy and paste the following url in your browser:</p>
    
    <p>${process.env.API_HOST}/verify?${token}</p>
    
    <p>If you didn't request this, let us know at support@futurefunds.com.</p>
    
    <p>Regards, <br>
    Team HackerEarth</p>` // plain text body
  };
}

module.exports = { signupMailTemplate };
