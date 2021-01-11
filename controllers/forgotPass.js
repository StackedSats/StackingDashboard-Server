import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mail from "../email.js";

dotenv.config();

const forgotPass = {
  get: async (req, res) => {
    const id = req.params.id;
    // eslint-disable-next-line no-undef
    const result = jwt.verify(id, process.env.jwtsecret);
    if (result) {
      res.redirect("/newPassword");
    } else {
      res.redirect("/");
    }
  },
  post: async (req, res) => {
    const { username } = req.body;
    // eslint-disable-next-line no-undef
    const code = jwt.sign({ username }, process.env.jwtsecret);
    // eslint-disable-next-line no-undef
    const link = `${process.env.domainname}/forgotPassword/${code}`;
    await mail({ to: req.body.username, link }, res);
  },
};

export { forgotPass };
