import Express from 'express';
import cors from 'cors';
import path from 'path';
import { EUrls } from './src/CustomTypes/Enums/EUrls.enum';
import "./src/configs/firebaseConfig"





const express = require("express");
const app: Express.Express = express();
const port: number = 8080; // default port to listen
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));




// define a route handler for the default home page
app.get("/", (req: Express.Request, res: Express.Response) => {
    res.send("Hello world!");
});

app.use('/' + EUrls.users, require('./src/routes/user.route'));

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});