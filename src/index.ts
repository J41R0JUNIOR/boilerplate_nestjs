import express from "express";
import { PrismaClient } from "@prisma/client";
import empresaRoutes from "./routes/empresa.routes";
import produtoRoutes from "./routes/produto.routes";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use("/empresas", empresaRoutes);
app.use("/produtos", produtoRoutes);

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
