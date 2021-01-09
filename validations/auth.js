import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function auth(req, res, next) {
  // 401 Unauthorized
  // 403 Forbidden
  // eslint-disable-next-line no-undef
  if (!process.env.requiresAuth) return next();

  if (!req.user.isAdmin) return res.status(403).send("Access denied.");

  next();
}
