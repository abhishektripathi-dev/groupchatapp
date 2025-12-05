require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res, next) => {
    try {
        const { name, email, phone, password } = req.body;
        const saltrounds = 10;
        const hashPassword = await bcrypt.hash(password, saltrounds);
        const user = await User.create({
            userName: name,
            email,
            phone: phoneNumber,
            password: hashPassword,
        });
        return res.status(200).json({ success: true, message: "user created" });
    } catch (error) {
        if (error.name === "SequelizeUniqueContraintError") {
            console.log(error.name);
            return res
                .status(500)
                .json({ success: false, message: "user already exists" });
        }
        return res
            .status(500)
            .json({ success: false, message: "failed to create user" });
    }
};
