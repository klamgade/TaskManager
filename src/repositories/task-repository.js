const getTasksJSON = require('../../tasks.json');
const Task = require('../models/task');
const logger = require('../utils/logger');

class TaskRepository {
    constructor(logger) {
        this.log = logger;
        this.paged = this.paged.bind(this);
    }

    async paged(filter, sortBy, page = 0, perPage = 50) {
        logger.info(`navigating to paged to get all tasks`);
        let results = [];
        let count = await Task.count(filter).exec();
        if(count > 0) {
            results = await Task
                .find(filter)
                .sort(sortBy)
                .lean()
                .limit(Number(perPage))
                .exec();   
        }
        return {
            total: count,
            items: results
        }
    }

    async create(doc) {
        return await Task.create(doc);
    }

}


module.exports = TaskRepository;
