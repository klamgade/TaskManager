
const config = require('./src/config.js');
const express = require('express');
const app = express();
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const logger = require('./src/utils/logger');
const http = require('http');
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

//middleware
app.use(morgan('dev')); 

//routes
const tasksRoutes = require('./src/routes/task-routes');
tasksRoutes(app, logger);

//database 
const dbPromise = require('./src/models/db')(config.get('db'));

const port = 3001;
const server = http.createServer(app);
dbPromise.then(() => {
    server.listen(port, () => {
        logger.info(`Server started on port port ${port}`);
        debug(`Server started on port port ${port}`);
    });
});