import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { v4 as uuid } from "uuid";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = 8000;

const user = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;

Connection(user, password);

app.use(cors());

app.use(function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Methods",
    "GET, HEAD, OPTIONS, POST, PUT, DELETE"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

});
app.use(express.urlencoded({ extended: true }));

app.listen(PORT || process.env.PORT, () =>
  console.log(`Server started at port ${PORT}!`)
);

DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

app.get("/getKey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
