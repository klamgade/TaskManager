const API_ROOT = '/tasks';
const TaskHandlers = require('./handlers/task-handlers');
const logger = require('../utils/logger');

module.exports = (app, log) => {
    const handlers = new TaskHandlers(log);
    logger.info(`navigating to task routes`);
    app.get(`${API_ROOT}`, handlers.getTasks);
}