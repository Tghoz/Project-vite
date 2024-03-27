import { Router } from "express";
import {
  postPropuesta,
  getPropuesta,
  getPropuestaByID,
} from "../controllers/analisis.controller.js";

const router = Router();

router.post("/analisis", postPropuesta);
router.get("/analisis", getPropuesta);
router.get("/analisis/:id", getPropuestaByID);

export default router;
