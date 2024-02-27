import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 33061,
  database: "test",
});
