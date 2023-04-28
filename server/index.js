import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const user = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;

const app = express();
app.use(cors);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);
Connection(user, password);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}!`));

DefaultData();
