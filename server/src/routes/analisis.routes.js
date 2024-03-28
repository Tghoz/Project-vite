import { Router } from "express";
import {
  postPropuesta,
  getPropuesta,
  getPropuestaByID,
  getRedes,
  postPublicacion,
  getPublicacion,
} from "../controllers/analisis.controller.js";

const router = Router();

router.post("/analisis", postPropuesta);
router.get("/analisis", getPropuesta);
router.get("/analisis/:id", getPropuestaByID);

router.post("/publicacion", postPublicacion);
router.get("/publicacion", getPublicacion);

router.get("/red", getRedes);

export default router;
