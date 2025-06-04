import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Events extends Model {}

Events.init(
  {
    id: {
      /**
       * Configuración del campo id: 🚀
       * - **type**: 'DataTypes.BIGINT.UNSIGNED' 🛠️
       *   - Utilizado para almacenar números enteros grandes. 📊
       *   - 'UNSIGNED' permite solo valores positivos. ➕
       *   - Nota: Usa el mismo tipo de dato para llaves foráneas (ej: 'id BIGINT UNSIGNED'). 🔑
       * - **autoIncrement**: true 🔄
       *   - Incrementa automáticamente el valor cada vez que se inserta un nuevo registro. 📈
       * - **primaryKey**: true 🏷️
       *   - Define este campo como la clave primaria de la tabla. 🗂️
       */

      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    }, 

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        event_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        galery_link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
  },
  {
    sequelize,
    modelName: "events",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
