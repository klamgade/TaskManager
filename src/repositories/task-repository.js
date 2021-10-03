const getTasksJSON = require('../../tasks.json')

class TaskRepository {
    constructor(logger) {
        this.log = logger;
        this.paged = this.paged.bind(this);
    }

    async paged(filter, sortBy, page, perPage) {
        let results = [];
            results = getTasksJSON; 
        return results;
    }
}


module.exports = TaskRepository;
