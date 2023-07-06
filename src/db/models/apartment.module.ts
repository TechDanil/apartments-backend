import { Model, Sequelize } from "sequelize";
import IApartment from "../../interfaces/apartmentInterfaces/IApartment.interface";

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Apartment
    extends Model<IApartment>
    implements IApartment
  {
    floor!: number;
    pos_on_floor!: number;
    price!: number;
    rooms!: number;
    area_total!: number;
    area_kitchen!: number;
    area_live!: number;
    layout_image!: string;
  }

  Apartment.init(
    {
      floor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      pos_on_floor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      area_total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },

      area_kitchen: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },

      area_live: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },

      layout_image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Apartment",
    }
  );
  
  return Apartment;
};
