import express from "express";
import mongoose from "mongoose";
import { normalizePort } from "./utils";
import { rewardHistory, transfers, rewards, callHistory } from "./controllers/";

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    autoReconnect: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch(() => {
    console.log("Failed to connect to the database");
  });

const app = express();

app.get("/rewardHistory", rewardHistory.get);
app.post("/rewardHistory", rewardHistory.post);

app.get("/transfers", transfers.get);
app.post("/transfers", transfers.post);

app.get("/rewards", rewards.get);
app.post("/rewards", rewards.post);

app.get("/callHistory", callHistory.get);
app.post("/callHistory", callHistory.post);

(function initServer() {
  // eslint-disable-next-line no-undef
  const port = normalizePort(process.env.PORT || "3000");
  app.listen(port, () => console.log("Server up"));
})();
