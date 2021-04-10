module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
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
  return Product;
};