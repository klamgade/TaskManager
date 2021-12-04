const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');
const { TaskStatus } = require('../constants');

const taskSchema = new Schema({
    _id: {
        type: String,
        required: true,
        default: uuid.v4
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: [...Object.keys(TaskStatus)],
        default: TaskStatus.TODO
    },
    whenCreated: {
        type: Date,
        default: Date.now
    },
    whenUpdated: {
        type: Date,
        default: Date.now
    },
    whenDeleted: {
        type: Date
    }
});

module.exports = mongoose.model('Task', taskSchema);