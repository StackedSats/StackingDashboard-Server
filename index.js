import express from "express";
import createError from "http-errors";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import { normalizePort } from "./utils.js";
import {
  rewardHistory,
  callHistory,
  addresses,
  registration,
  login,
  btcAddressReward,
  cycle,
  btcClaim,
  generateCSV,
  getUserClaimedRewardsGraph,
  dailyBtcReward,
} from "./controllers/index.js";
import passport from "passport";
import session from "express-session";
import initializePassport from "./validations/passport-config.js";
import flash from "express-flash";
import { User } from "./models/index.js";
import { forgotPass } from "./controllers/forgotPass.js";
import dotenv from "dotenv";
import { transactionRecord } from "./controllers/transactionRecord.js";
import PDFDocument from "pdfkit";
import { Buffer } from "buffer";
import auth from "./validations/auth.js";

dotenv.config();

initializePassport(
  passport,
  async (username) => await User.findOne({ username }),
  async (id) => await User.findById(id)
);

mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.mongodbURL, {
    useNewUrlParser: true,
    autoReconnect: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch(() => {
    console.log("Failed to connect to the database");
  });

mongoose.set("debug", true);

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
}

const app = express();

app.use(express.static("build"));
app.use(express.urlencoded({ extended: false, useFinAndModify: true }));
app.use(express.json());
app.use(morgan("combined"));

app.use(cors());
app.use(flash());
app.use(
  session({
    secret: "scruitiny",
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(compression({ filter: shouldCompress }));

app.post("/login", checkNotAuthenticated, login);

app.delete("/logout", (req, res) => {
  req.logOut();
  res.status(200).send("success");
});

app.get("/notloggedin", (req, res) => {
  res.send(false);
});

app.post("/register", checkNotAuthenticated, registration);

app.get("/forgotPassword/:id", forgotPass.get);
app.post("/forgotPassword", forgotPass.post);

app.post("/btcAddressReward", btcAddressReward.post);
app.put("/btcAddressReward", btcAddressReward.put);

app.get("/rewardHistory", rewardHistory.get);
app.post("/rewardHistory", rewardHistory.post);

app.get("/cycleInfo", cycle);
app.post("/getUserClaimedRewardsGraph", getUserClaimedRewardsGraph);

app.delete("/addresses", addresses.delete);
app.post("/addresses", addresses.post);

app.post("/transactionRecords", auth, transactionRecord);

app.post("/dailyBTCReward", dailyBtcReward);
app.post("/btcClaim", auth, btcClaim);

app.get("/callHistory", callHistory.get);
app.post("/callHistory", callHistory.post);

app.get("/generateCSV/:id", auth, generateCSV);

app.get("/*", (req, res) => {
  res.sendFile("index.html");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // send the error page
  res.status(err.status || 500);
  res.send("error");
});

// eslint-disable-next-line no-unused-vars
function checkAuthenticated(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }

  res.send("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.send("/success");
  }

  next();
}

const port = normalizePort(process.env.PORT || "4500");
const server = app.listen(port, () => console.log("Server up on " + port));

export default server;
