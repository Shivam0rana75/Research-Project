import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "grid_sentinel_db",
  password: "Dob@252017",
  port: 5432,
});