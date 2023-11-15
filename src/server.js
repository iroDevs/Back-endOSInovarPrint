require('dotenv').config();
require('./database/index');

const express = require('express');
const app = express();
const os = require('./routes/os');
//json

app.use(express.json());

//routes
app.use("/os",os);

const port = process.env.NODE_PORT || 3333;




app.listen(port, () => console.log(`Example app listening on port ${port}!`));