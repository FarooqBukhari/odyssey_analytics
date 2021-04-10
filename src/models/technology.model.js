module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define("technology", {
    technologyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technologyDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    displayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    imageMimeType: {
      type: DataTypes.STRING,
    },
  });
  return Technology;
};