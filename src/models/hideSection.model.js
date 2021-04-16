module.exports = (sequelize, DataTypes) => {
    const HideSection = sequelize.define("hide_section", {
      home: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      aboutUs: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      team: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      mission: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      services: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      projects: {
        type: DataTypes.BOOLEAN,
        default: true,
      },
      odysseyFoundation: {
        type: DataTypes.BOOLEAN,
        default: true,
      },
      technologies: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      careers: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      contact: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    });
    return HideSection;
  };