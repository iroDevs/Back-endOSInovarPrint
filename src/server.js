require('dotenv').config();
require('./database/index');
const path = require('path');
const express = require('express');
const app = express();
const os = require('./routes/os');
const cors = require('cors');
const up = require('./routes/upload');
//json

app.use(express.json());
app.use(cors());

//routes
app.use("/os",os);
app.use('/upload',up)

app.use('/image', express.static(path.join(__dirname, 'multer', 'uploads')));


const port = process.env.NODE_PORT || 3333;




app.listen(port, () => console.log(`Example app listening on port ${port}!`));