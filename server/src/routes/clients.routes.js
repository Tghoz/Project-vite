import { Router } from "express";
import {
  deleteClient,
  getClients,
  postClient,
  updateClient,
  getClientsByID,
} from "../controllers/clients.controller.js";

const router = Router();

// !GET
router.get("/client", getClients);

// !Get by ID
router.get("/client/:id", getClientsByID);

// !POST
router.post("/client", postClient);

// !PATCH
router.patch("/client/:id", updateClient);

// !DELETE
router.delete("/client/:id", deleteClient);




export default router;
