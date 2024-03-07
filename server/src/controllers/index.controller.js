import { pool } from "../db.js";

export const get = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM clientes");
  res.json(result);
};
