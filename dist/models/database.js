"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("moe_db", "root", "kinuca01", {
    host: "node_db",
    dialect: "mysql",
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map