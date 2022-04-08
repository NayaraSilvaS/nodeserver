import { Model, DataTypes } from "sequelize";
import sequelize from "./database";

class Usuario extends Model {
  public id!: number;
  public nome!: string;
  public sobrenome!: string;
  public email!: string;
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    sobrenome: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    sequelize,
  }
);

export default Usuario;
