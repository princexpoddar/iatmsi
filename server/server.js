const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/DB");

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
