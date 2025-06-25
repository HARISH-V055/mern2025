const express = require('express');
const { getTodo, postTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const todoRoute = express.Router();

todoRoute.get('/', getTodo);
todoRoute.post('/', postTodo);
todoRoute.put('/:id', updateTodo);
todoRoute.delete('/:id', deleteTodo);

module.exports = todoRoute;