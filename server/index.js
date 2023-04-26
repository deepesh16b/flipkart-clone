import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import { Router } from 'express';

dotenv.config();
const user = process.env.USER_NAME;
const password  =process.env.USER_PASSWORD;

const app = express();
app.Router("/signup", ()=>{
    
})

Connection(user, password);

const PORT = 8000;
app.listen ( PORT, () => console.log(`Server started at port ${PORT}!`));

DefaultData();