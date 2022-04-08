import { Model, DataTypes } from "sequelize";
import sequelize from "./database";

class Historico extends Model {
  public id!: number;
  public usuarioId!: number;
  public dados!: string;
}

Historico.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dados: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "historicos", sequelize }
);

export default Historico;
