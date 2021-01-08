import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import { normalizePort } from "./utils.js";
import { rewardHistory, callHistory } from "./controllers/index.js";

mongoose
  .connect("mongodb://localhost:27017/stackindashboard", {
    useNewUrlParser: true,
    autoReconnect: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch(() => {
    console.log("Failed to connect to the database");
  });

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
}

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use(compression({ filter: shouldCompress }));

app.get("/rewardHistory", rewardHistory.get);
app.post("/rewardHistory", rewardHistory.post);

// app.get("/transfers", transfers.get);
// app.post("/transfers", transfers.post);

// app.get("/rewards", rewards.get);
// app.post("/rewards", rewards.post);

app.get("/callHistory", callHistory.get);
app.post("/callHistory", callHistory.post);

(function initServer() {
  // eslint-disable-next-line no-undef
  const port = normalizePort(process.env.PORT || "3000");
  app.listen(port, () => console.log("Server up on " + port));
})();
