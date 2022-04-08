import { validationResult, Result } from "express-validator";
import { Request, Response } from "express";

export function adiciona(req: Request, res: Response) {
  const errors: Result = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  res.send("Olá Mundo");
}
