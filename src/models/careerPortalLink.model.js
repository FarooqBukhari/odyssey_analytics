module.exports = (sequelize, DataTypes) => {
    const CareerPortalLink = sequelize.define("career_portal_link", {
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return CareerPortalLink;
  };