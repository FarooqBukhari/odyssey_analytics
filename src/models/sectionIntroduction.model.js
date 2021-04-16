module.exports = (sequelize, DataTypes) => {
    const SectionIntroduction = sequelize.define("section_introduction", {
      home: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      aboutUs: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      team: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mission: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      services: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      projects: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      odysseyFoundation: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      technologies: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      careers: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      contact: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
    return SectionIntroduction;
  };