const express = require("express");
const cors = require("cors");

const healthRouter = require("./routes/health");
const dbTestRouter = require("./routes/db-test");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);
app.use("/db-test", dbTestRouter);

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
