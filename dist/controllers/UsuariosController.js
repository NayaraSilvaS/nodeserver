"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adiciona = void 0;
const express_validator_1 = require("express-validator");
const sequelize_1 = require("sequelize");
const Usuario_1 = __importDefault(require("../models/Usuario"));
const Historico_1 = __importDefault(require("../models/Historico"));
async function adiciona(req, res) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(424).json({ errors: errors.array() });
    }
    try {
        const used = await Usuario_1.default.findOne({
            where: {
                [sequelize_1.Op.and]: [{ email: req.body.email }],
            },
        });
        if (used) {
            return res.status(422).send({ error: "Email já em uso." });
        }
        const novoUsuario = await Usuario_1.default.create(req.body);
        await Historico_1.default.create({
            usuarioId: novoUsuario.id,
            dados: JSON.stringify(novoUsuario),
        });
        return res.status(200).json({
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            sobrenome: novoUsuario.sobrenome,
            email: novoUsuario.email,
        });
    }
    catch (error) {
        return res.status(422).send({ error: "Houve um error." });
    }
}
exports.adiciona = adiciona;
//# sourceMappingURL=UsuariosController.js.map