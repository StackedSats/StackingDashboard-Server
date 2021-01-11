import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendMail = async ({ to, link }, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    requireTLS: true,
    auth: {
      // eslint-disable-next-line no-undef
      user: process.env.email,
      // eslint-disable-next-line no-undef
      pass: process.env.password,
    },
  });

  var mailOptions = {
    // eslint-disable-next-line no-undef
    from: process.env.email,
    to,
    subject: "Password Reset",
    text: `Your reset url is: ${link}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500);
      res.end();
    } else {
      console.log("Email sent: " + info.response);
      res.status(200);
      res.end();
    }
  });
};

export default sendMail;
