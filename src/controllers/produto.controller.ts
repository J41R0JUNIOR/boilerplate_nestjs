import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function criarProduto(req: Request, res: Response) {
  const { nome, preco, empresaId } = req.body;

  try {
    const produto = await prisma.produto.create({
      data: { nome, preco, empresaId }
    });

    res.status(201).json(produto);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar produto", details: err });
  }
}

export async function listarProdutos(_: Request, res: Response) {
  const produtos = await prisma.produto.findMany({ include: { empresa: true } });
  res.json(produtos);
}

export async function atualizarProduto(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const { nome, preco } = req.body;

  try {
    const produto = await prisma.produto.update({
      where: { id },
      data: { nome, preco }
    });

    res.json(produto);
  } catch (err) {
    res.status(404).json({ error: "Produto não encontrado" });
  }
}

export async function deletarProduto(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    await prisma.produto.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: "Produto não encontrado" });
  }
}
