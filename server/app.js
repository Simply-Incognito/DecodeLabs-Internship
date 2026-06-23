"use strict";
const express = require('express');

const app = express();

app.use(express.json());

const orderRouter = require(`${__dirname}/routes/orderRoute`);

app.use('/api/v1/orders', orderRouter);


module.exports = app;