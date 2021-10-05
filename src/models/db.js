const mongoose = require('mongoose');
const logger = require('../utils/logger');
const config = require('../config');

module.exports = async() => {
    const db = config.get('db');

    try {
        await mongoose.connect('mongodb://localhost:27017');
        logger.info('connection established to mongodb');
    } catch(err) {
        logger.error(`error connecting to mongodb ${err.message}`, {err});
    } 
}
