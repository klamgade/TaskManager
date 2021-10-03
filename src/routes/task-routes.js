const API_ROOT = '/tasks';
const TaskHandlers = require('./handlers/task-handlers');

module.exports = (app, log) => {
    const handlers = new TaskHandlers(log);

    app.get(`${API_ROOT}`, handlers.getTasks);
}