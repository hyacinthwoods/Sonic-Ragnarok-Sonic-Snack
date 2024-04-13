const express = require('express');
//import cors from 'cors';
//import bodyParser from 'body-parser';
const router = require('./routes/router');

const app = express();

//app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/', router);

const port = 8080;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
