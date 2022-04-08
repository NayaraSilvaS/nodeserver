"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("./database"));
class Historico extends sequelize_1.Model {
}
Historico.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    usuarioId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    dados: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { tableName: "historicos", sequelize: database_1.default });
exports.default = Historico;
//# sourceMappingURL=Historico.js.map