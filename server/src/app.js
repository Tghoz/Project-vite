import express from "express";
import clientsRoute from "./routes/clients.routes.js";
import indexRoute from "./routes/index.routes.js";

console.clear();

const app = express();

app.use(express.json());

app.use("/api", clientsRoute);
app.use(indexRoute);

app.use((req, res, next) => {
  res.status(404).json({
    messege: "endpoint not fount",
  });
});

export default app;
