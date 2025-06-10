import express from "express";
import { criarEmpresa, listarEmpresas } from "../controllers/empresa.controller";

const router = express.Router();

router.post("/", criarEmpresa);
router.get("/", listarEmpresas);

export default router;
