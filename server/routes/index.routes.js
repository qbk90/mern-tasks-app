import { Router } from "express";
import { pool } from "../db.js";

// Instantiate the Router object from express
const router = Router();

// Create petition called ping
router.get("/ping", async (req, res) => {
  const [result, other] = await pool.query("SELECT 1 + 1 as result");
  console.log(result);
  console.log(other)
  res.json(result[0]);
});

export default router;
