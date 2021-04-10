module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectDescription: {
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
  return Project;
};