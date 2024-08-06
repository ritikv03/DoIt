import React, { useState, useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Hero = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Hero;
