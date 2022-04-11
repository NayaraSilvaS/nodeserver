"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.historico = exports.paginate = exports.remove = exports.get = exports.editar = exports.adiciona = void 0;
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
async function remove(req, res) {
    try {
        const usuario = await Usuario_1.default.findOne({
            where: { id: req.params.id },
        });
        if (!usuario) {
            return res.status(404).send({ error: "Usuário Removido." });
        }
        await Historico_1.default.create({
            usuarioId: usuario.id,
            dados: JSON.stringify(usuario),
        });
        await usuario.destroy();
        return res.status(200).send({ msg: "Usuário Removido com sucesso." });
    }
    catch (error) {
        return res.status(422).send({ error: "Houve um error." });
    }
}
exports.remove = remove;
async function paginate(req, res) {
    try {
        const { pagina = 1, nome = "", sobrenome = "", email = "" } = req.body;
        const condicoes = [];
        let paginaAtual = Number(pagina) || 1;
        if (paginaAtual < 1) {
            paginaAtual = 1;
        }
        // tslint:disable-next-line: no-console
        console.log(paginaAtual);
        if (nome) {
            condicoes.push({
                nome: { [sequelize_1.Op.like]: `${nome}%` },
            });
        }
        if (sobrenome) {
            condicoes.push({
                sobrenome: { [sequelize_1.Op.like]: `${sobrenome}%` },
            });
        }
        if (email) {
            condicoes.push({
                email: { [sequelize_1.Op.like]: `${email}%` },
            });
        }
        const limit = 15;
        const offset = (paginaAtual - 1) * limit;
        const usuarios = await Usuario_1.default.findAndCountAll({
            attributes: ["id", "nome", "sobrenome", "email"],
            where: { [sequelize_1.Op.and]: condicoes },
            limit,
            offset,
        });
        const ultimaPagina = Math.ceil(usuarios.count / limit);
        const proximaPagina = ultimaPagina < paginaAtual ? ultimaPagina : paginaAtual + 1;
        return res.status(200).json({
            total: usuarios.count,
            primeiroItem: offset + 1,
            ultimoItem: limit * paginaAtual,
            paginaAtual,
            itens: usuarios.rows,
            proximaPagina,
            paginaAnterior: paginaAtual - 1 || 1,
            ultimaPagina,
        });
    }
    catch (error) {
        return res.status(422).send({ error: "Houve um error." });
    }
}
exports.paginate = paginate;
async function historico(req, res) {
    try {
        const usuario = await Usuario_1.default.findOne({
            where: { id: req.params.id },
        });
        if (!usuario) {
            return res.status(404).send({ error: "Usuário não encontrado." });
        }
        const historicos = await Historico_1.default.findAll({
            where: { usuarioId: req.params.id },
            order: [["id", "DESC"]],
        });
        return res.status(200).json({
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            email: usuario.email,
            historicos,
        });
    }
    catch (error) {
        return res.status(422).send({ error: "Houve um error." });
    }
}
exports.historico = historico;
//# sourceMappingURL=UsuariosController.js.map