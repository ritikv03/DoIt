import React, { useState } from 'react';
import { FaBell, FaRedo } from 'react-icons/fa';
import './TaskInput.css';

const TaskInput = () => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    // Handle adding the task logic here
    console.log('Task added:', task);
    setTask('');
  };

  return (
    <div className="task-input-container">
      <textarea
        className="task-textarea"
        placeholder="Enter your task here..."
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
