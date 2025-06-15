const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const User = require("./user.model");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Product.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Product, { foreignKey: "userId" });

module.exports = Product;
