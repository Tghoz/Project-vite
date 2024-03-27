import express from "express";
import cors from "cors";
import clientsRoute from "./routes/clients.routes.js";
import analisis from "./routes/analisis.routes.js";
import generos from "./routes/generoCliente.routes.js";

console.clear();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", clientsRoute);
app.use("/api", generos);
app.use("/api", analisis);

app.use((req, res, next) => {
  res.status(404).json({
    messege: "endpoint not fount",
  });
});

export default app;
