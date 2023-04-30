import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = 8000;

const user = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;

Connection(user, password);

app.listen(PORT, () => console.log(`Server started at port ${PORT}!`));

DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Route);


