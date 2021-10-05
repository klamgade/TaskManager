const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

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