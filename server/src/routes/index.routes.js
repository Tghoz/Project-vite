
import { Router } from "express";
import { get } from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", get);

export default router;
