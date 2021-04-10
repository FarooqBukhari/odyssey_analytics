module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define("service", {
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceDescription: {
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
  return Service;
};