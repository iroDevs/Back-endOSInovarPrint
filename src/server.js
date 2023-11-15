require('dotenv').config();

const express = require('express');
const app = express();
//json

app.use(express.json());

const port = process.env.NODE_PORT || 3333;

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));