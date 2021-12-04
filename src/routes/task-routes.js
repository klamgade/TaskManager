const API_ROOT = '/tasks';
const TaskHandlers = require('./handlers/task-handlers');
const logger = require('../utils/logger');

module.exports = (app, log) => {
    const handlers = new TaskHandlers(log);
    logger.info(`navigating to task routes`);
    //integrate and add swagger docs
    app.get(`${API_ROOT}`, handlers.getTasks);
    app.post(`${API_ROOT}`, handlers.createTask);
    app.post(`${API_ROOT}/:id`, handlers.deleteTask);
    app.put(`${API_ROOT}/:id`, handlers.updateTask);
}