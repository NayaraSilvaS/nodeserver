"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("./database"));
class Usuario extends sequelize_1.Model {
}
Usuario.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: new sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    sobrenome: {
        type: new sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
}, {
    tableName: "usuarios",
    sequelize: database_1.default,
});
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map