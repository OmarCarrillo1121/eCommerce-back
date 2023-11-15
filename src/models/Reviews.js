const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reviews",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // Claves foráneas
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      videogameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Videogames",
          key: "id",
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
