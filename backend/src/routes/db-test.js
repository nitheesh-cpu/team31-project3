const express = require("express");
const pool = require("../../server/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT 1 AS ok");
    res.json({ ok: result.rows[0].ok });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
