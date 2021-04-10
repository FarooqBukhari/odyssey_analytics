module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("team", {
    memberName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    memberPosition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkedinUrl: {
      type: DataTypes.STRING,
      allowNull: true,
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
  return Team;
};