module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("contact", {
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address1Location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address1: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      address2Location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address2: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    });
    return Contact;
  };