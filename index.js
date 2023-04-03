const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

const app = express();

/* Load env */
dotenv.config({ path: './.env'});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

