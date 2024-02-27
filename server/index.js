import express from "express";
import { port } from "./config.js";
import { pool } from "./db.js";

console.clear();

const app = express();

app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT COUNT(*) AS total FROM clients");
  res.json(result);
});

app.listen(port);
console.log(`server-on ${port}`);
