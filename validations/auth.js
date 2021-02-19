import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function auth(req, res, next) {
  // 401 Unauthorized
  // 403 Forbidden
  // eslint-disable-next-line no-undef
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token, process.env.jwtsecret);
    req.user = decoded;

    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}
