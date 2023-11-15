const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ft42b.pf05@gmail.com",
    pass: "ngyf qnwx fqqi skqo",
  },
});

let mailOptions = {
  from: "ft42b.pf05@gmail.com",
  to: "kangsebastian43@gmail.com",
  subject: "prueba nodemailer",
  text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
};

transporter
  .sendMail(mailOptions)
  .then(function (response) {
    console.log("Email sent!!!", response);
  })
  .catch(function (error) {
    console.log("Error: ", error);
  });
