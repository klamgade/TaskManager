const mongoose = require('mongoose');
const logger = require('../utils/logger');
const config = require('../config');
require('dotenv').config();

module.exports = async () => {
  const db = config.get('db');

  try {
    await mongoose.connect(
      `mongodb+srv://${db.username}:${db.pass}@cluster0.lzxdo.mongodb.net/${db.name}?retryWrites=true&w=majority`
    );
    logger.info('connection established to mongodb');
  } catch (err) {
    logger.error(`error connecting to mongodb ${err.message}`, { err });
  }
};
