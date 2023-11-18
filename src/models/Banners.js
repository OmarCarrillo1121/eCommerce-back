const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Banners",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      logotypeUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      backgroundUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};