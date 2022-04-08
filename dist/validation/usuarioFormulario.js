"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const usuarioFormulario = [
    (0, express_validator_1.body)("nome").notEmpty().withMessage("O nome é obrigatório."),
    (0, express_validator_1.body)("sobrenome").notEmpty().withMessage("O sobrenome é obrigatório."),
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("O email é obrigatório.")
        .isEmail()
        .withMessage("Informe um email válido."),
];
exports.default = usuarioFormulario;
//# sourceMappingURL=usuarioFormulario.js.map