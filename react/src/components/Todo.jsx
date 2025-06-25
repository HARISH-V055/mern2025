import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API = 'http://localhost:3000';

const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchTodo = async () => {
    const { data } = await axios.get(`${API}/todo/`);
    setTodos(data);
  };

  useEffect(() => { fetchTodo(); }, []);

  const handleAddOrEdit = async () => {
    if (!task.trim()) return;
    if (editing) {
      await axios.put(`${API}/todo/${editing._id}`, { task });
      setEditing(null);
    } else {
      await axios.post(`${API}/todo`, { task });
    }
    setTask('');
    fetchTodo();
  };

  const handleDelete = async id => {
    await axios.delete(`${API}/todo/${id}`);
    fetchTodo();
  };

  const handleToggleStatus = async todo => {
    await axios.put(`${API}/todo/${todo._id}`, {
      status: !todo.status,
      task: todo.task
    });
    fetchTodo();
  };

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={task}
        placeholder="Enter the task"
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleAddOrEdit}>{editing ? 'Update' : 'Add'}</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span
              onClick={() => handleToggleStatus(todo)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.status ? 'line-through' : 'none'
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => {
              setEditing(todo);
              setTask(todo.task);
            }}>Edit</button>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;