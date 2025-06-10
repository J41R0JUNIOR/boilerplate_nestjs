import express from "express";
import {
  criarProduto,
  listarProdutos,
  atualizarProduto,
  deletarProduto
} from "../controllers/produto.controller";

const router = express.Router();

router.post("/", criarProduto);
router.get("/", listarProdutos);
router.put("/:id", atualizarProduto);
router.delete("/:id", deletarProduto);

export default router;
