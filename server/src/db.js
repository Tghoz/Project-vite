import { createPool } from "mysql2/promise";
import {
  DB_USER,
  DB_PASWORD,
  DB_HOST,
  DB_DATABASE,
  DB_PORT,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
