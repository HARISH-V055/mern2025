const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todoss', todoSchema);

module.exports = Todo;