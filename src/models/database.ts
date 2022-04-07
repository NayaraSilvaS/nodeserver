import { Sequelize } from "sequelize";

const sequelize = new Sequelize("moe_db", "root", "kinuca01", {
  host: "node_db",
  dialect: "mysql",
});

export default sequelize;
