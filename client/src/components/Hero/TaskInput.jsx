import React, { useState, useEffect } from 'react';
import { FaBell, FaRedo } from 'react-icons/fa';
import './TaskInput.css';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (savedTasks.length > 0) {
      onAddTask(savedTasks);
    }
  }, [onAddTask]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === '') return;

    // Retrieve tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Add the new task
    const updatedTasks = [...savedTasks, task];
    
    // Save updated tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Update the tasks in the parent component
    onAddTask(updatedTasks);
    
    setTask('');
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
