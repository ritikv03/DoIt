import React, { useState } from 'react';
import { FaBell, FaRedo } from 'react-icons/fa';
import './TaskInput.css';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(), // Unique ID based on timestamp
        text: task,
        completed: false,
        starred: false,
      };
      onAddTask(newTask);
      setTask('');
    }
  };

  return (
    <div className="task-input-container">
      <textarea
        className="task-textarea"
        placeholder="Add a Task..."
        value={task}
        onChange={handleTaskChange}
      />
      <div className="button-container">
        <div className="icon-buttons">
          <button className="icon-button reminder-button">
            <FaBell />
          </button>
          <button className="icon-button repeat-button">
            <FaRedo />
          </button>
        </div>
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
