import { validationResult, Result } from "express-validator";
import { Request, Response } from "express";
import { Op } from "sequelize";
import Usuario from "../models/Usuario";

export async function adiciona(req: Request, res: Response) {
  const errors: Result = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(424).json({ errors: errors.array() });
  }

  try {
    const used = await Usuario.findOne({
      where: {
        [Op.and]: [{ email: req.body.email }],
      },
    });

    if (used) {
      return res.status(422).send({ error: "Email já em uso." });
    }

    const novoUsuario = await Usuario.create(req.body);

    return res.status(200).json({
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      sobrenome: novoUsuario.sobrenome,
      email: novoUsuario.email,
    });
  } catch (error) {
    return res.status(422).send({ error: "Houve um error." });
  }
}
