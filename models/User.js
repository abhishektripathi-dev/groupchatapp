const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    userName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
