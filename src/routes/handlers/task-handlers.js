const TaskRepository = require('../../repositories/task-repository');
const logger = require('../../utils/logger');
const getTasksJSON = require('../../../tasks.json')

class TaskHandlers {
    constructor(logger) {
        this.taskRepository = new TaskRepository(logger);
        this.getTasks = this.getTasks.bind(this);
    }

    async getTasks(req, res) {
        try {
            const { direction = 'asc', sort = 'name', page = 0, perPage = 50 } = req.query;
            let filter = {};
            logger.info(`accessing to task repository`);
            let result = await this.taskRepository.paged(filter, page, perPage);
            res.status(200);
            res.json({
                    data: result.items,
                    metadata: {
                        page: Number(page),
                        perPage: Number(perPage),
                        total: result.total
                    }
                }); 
        } catch (error) {
            logger.info('error', error)
        }
    }
}

module.exports = TaskHandlers;