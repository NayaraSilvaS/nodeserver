"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adiciona = void 0;
const express_validator_1 = require("express-validator");
function adiciona(req, res) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    res.send("Olá Mundo");
}
exports.adiciona = adiciona;
//# sourceMappingURL=UsuariosController.js.map