"use strict";
const dotenv = require('dotenv');

dotenv.config({path: `${__dirname}/config.env`, debug: true});

const app = require(`${__dirname}/app`);

// Connect to db


const port = 1001;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});