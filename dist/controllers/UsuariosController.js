"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.editar = exports.adiciona = void 0;
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
async function editar(req, res) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(424).json({ errors: errors.array() });
    }
    try {
        const usuario = await Usuario_1.default.findOne({
            where: { id: req.params.id },
        });
        if (!usuario) {
            return res.status(404).send({ error: "Usuário não encontrado." });
        }
        const used = await Usuario_1.default.findOne({
            where: {
                [sequelize_1.Op.and]: [
                    { email: req.body.email },
                    { id: { [sequelize_1.Op.ne]: req.params.id } },
                ],
            },
        });
        if (used) {
            return res.status(422).send({ error: "Email já em uso." });
        }
        await usuario.update(req.body);
        await Historico_1.default.create({
            usuarioId: usuario.id,
            dados: JSON.stringify(usuario),
        });
        return res.status(200).json({
            id: usuario.id,
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            email: usuario.email,
        });
    }
    catch (error) {
        return res.status(422).send({ error: "Houve um error." });
    }
}
exports.editar = editar;
async function get(req, res) {
    try {
        const usuario = await Usuario_1.default.findOne({
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
    }
    catch (error) {
        return res.status(422).send({ error: "Houve um error." });
    }
}
exports.get = get;
//# sourceMappingURL=UsuariosController.js.map