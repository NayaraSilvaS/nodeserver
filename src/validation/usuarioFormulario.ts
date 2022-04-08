import { body } from "express-validator";

const usuarioFormulario = [
  body("nome").notEmpty().withMessage("O nome é obrigatório."),
  body("sobrenome").notEmpty().withMessage("O sobrenome é obrigatório."),
  body("email")
    .notEmpty()
    .withMessage("O email é obrigatório.")
    .isEmail()
    .withMessage("Informe um email válido."),
];

export default usuarioFormulario;
