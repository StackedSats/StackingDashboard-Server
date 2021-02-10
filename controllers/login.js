import passport from "passport";
import { User } from "../models/index.js";

const login = (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      return res.redirect("/");
    }

    // req / res held in closure
    req.logIn(user, async function (err) {
      if (err) {
        return next(err);
      }
      const user = await User.findOne({ username: req.body.username });
      const token = user.generateAuthToken();
      return res.send({ user, token });
    });
  })(req, res, next);
};

export { login };
