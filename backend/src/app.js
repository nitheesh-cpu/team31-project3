const express = require("express");
const cors = require("cors");

const dbTestRouter = require("./routes/db-test");
const employeesRouter = require("./routes/employees");
const inventoryRouter = require("./routes/inventory");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/db-test", dbTestRouter);
app.use("/employees", employeesRouter);
app.use("/inventory", inventoryRouter);

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;