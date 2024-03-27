import { Router } from "express";
import { getGeneros } from "../controllers/generosClient.js";

const router = Router();

router.get("/generos", getGeneros);

export default router;
