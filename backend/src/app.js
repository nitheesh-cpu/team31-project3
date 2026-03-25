const express = require("express");
const cors = require("cors");

const healthRouter = require("./routes/health");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
