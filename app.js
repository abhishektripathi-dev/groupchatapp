require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./util/database");
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/user", userRoutes);

sequelize
    .sync()
    .then(() => console.log("DB sync done"))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
