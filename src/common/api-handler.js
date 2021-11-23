class ApiHandler {
    constructor(logger) {
        this.log = logger;
        this.handleError = this.handleError.bind(this);
        this.buildProjection = this.buildProjection.bind(this);
        this.buildSortBy = this.buildSortBy.bind(this);
    }

    handleError(err, res) {
        this.log.error(err.message, [err]);
        res.status(500);
        res.json({ message: 'internal server error' });
    }

    buildSortBy(sort, direction) {
        let sortBy = {};
        if (sort) {
            sortBy[sort] = direction === 'asc' ? 1 : -1;
        }

        return sortBy;
    }

    addToProjection(projection, key) {
        if (key) {
            let cleanKey = key;
            const include = key[0] === '-' ? false : true;
            if (!include) {
                cleanKey = cleanKey.slice(1);
            }
            projection[cleanKey] = include ? 1 : -1;
        }
        return projection;
    }

    buildProjection(fieldsAsCsv, options = {}) {
        const { forbid = [] } = options;
        let projection;
        let forbidden = [null, ''].concat(forbid);
        if (fieldsAsCsv) {
            let tokens = fieldsAsCsv.split(',');
            projection = tokens
                .map((t) => (t ? t.trim() : ''))
                .filter((t) => !forbidden.includes(t))
                .reduce(this.addToProjection, {});
        }
        return projection;
    }
}

module.exports = ApiHandler;
