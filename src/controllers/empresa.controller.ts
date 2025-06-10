import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function criarEmpresa(req: Request, res: Response) {
  const { nome, responsavel } = req.body;

  try {
    const empresa = await prisma.empresa.create({
      data: {
        nome,
        responsavel: {
          create: responsavel
        }
      },
      include: { responsavel: true }
    });

    res.status(201).json(empresa);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar empresa", details: err });
  }
}

export async function listarEmpresas(_: Request, res: Response) {
  const empresas = await prisma.empresa.findMany({ include: { responsavel: true, produtos: true } });
  res.json(empresas);
}
