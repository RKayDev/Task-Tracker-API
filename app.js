import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mainRouter from "./routers/mainRouter.js";

const app = express();
const port = process.env.PORT || 81;
app.use(bodyParser.json());

const allowedOrigins = [
    'http://localhost:80',
    'http://192.168.0.106',
    'https://tasktracker-web-a15fe10a9395.herokuapp.com'
];


app.use(cors({
    origin: allowedOrigins
})); // 👈 This allows ALL origins by default

mainRouter(app);


app.listen(port, () => console.log("Listening on http://localhost:81/api-docs"));

