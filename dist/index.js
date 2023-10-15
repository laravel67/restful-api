"use strict";
// import express from 'express';
// import { PORT } from './config/constants';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Selamat datang di RESTful API gateway');
});
app.use('/users', routes_1.userRouter);
app.listen(constants_1.PORT, () => {
    console.log(`Endpoint sudah siap dan dapat diakses di port ${constants_1.PORT}`);
});
