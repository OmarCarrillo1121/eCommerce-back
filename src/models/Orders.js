const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Orders",
    {
      order: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      products: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
        allowNull: true,
      },

      amount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },

      cancelled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
