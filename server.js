const express = require('express');
const app = express();
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const port = 3000;
app.listen(port, () => {
    debug(`Server started on port ${chalk.green(port)}`);
});