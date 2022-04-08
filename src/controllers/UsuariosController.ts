import { validationResult, Result } from "express-validator";
import { Request, Response } from "express";
import { Op } from "sequelize";
import Usuario from "../models/Usuario";
import Historico from "../models/Historico";

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

    await Historico.create({
      usuarioId: novoUsuario.id,
      dados: JSON.stringify(novoUsuario),
    });

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

export async function editar(req: Request, res: Response) {
  const errors: Result = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(424).json({ errors: errors.array() });
  }

  try {
    const usuario = await Usuario.findOne({
      where: { id: req.params.id },
    });

    if (!usuario) {
      return res.status(404).send({ error: "Usuário não encontrado." });
    }

    const used = await Usuario.findOne({
      where: {
        [Op.and]: [
          { email: req.body.email },
          { id: { [Op.ne]: req.params.id } },
        ],
      },
    });

    if (used) {
      return res.status(422).send({ error: "Email já em uso." });
    }

    await usuario.update(req.body);

    await Historico.create({
      usuarioId: usuario.id,
      dados: JSON.stringify(usuario),
    });

    return res.status(200).json({
      id: usuario.id,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
    });
  } catch (error) {
    return res.status(422).send({ error: "Houve um error." });
  }
}

export async function get(req: Request, res: Response) {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.params.id },
    });

    if (!usuario) {
      return res.status(404).send({ error: "Usuário não encontrado." });
    }

    return res.status(200).json({
      id: usuario.id,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
    });
  } catch (error) {
    return res.status(422).send({ error: "Houve um error." });
  }
}
