const mongoose = require('mongoose');
const logger = require('../utils/logger');
const config = require('../config');
require('dotenv').config();

module.exports = async() => {
    const db = config.get('db');

    try {
        await mongoose.connect(`mongodb+srv://${process.env.ATLAS_DB_USER}:${process.env.ATLAS_DB_PWD}@cluster0.lzxdo.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`);
        logger.info('connection established to mongodb');
    } catch(err) {
        logger.error(`error connecting to mongodb ${err.message}`, {err});
    } 
}
