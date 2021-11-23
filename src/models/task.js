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
    title : {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: [...Object.keys(TaskStatus)],
        default: TaskStatus.TODO
    },
    createdBy: {
        type: String
    },
    whenCreated: {
        type: Date,
        default: Date.now
    },
    whenUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);