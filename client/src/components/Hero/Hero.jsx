import React, { useState, useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Hero = ({ isCardMode }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} updateTasks={updateTasks} isCardMode={isCardMode} />
    </div>
  );
};

export default Hero;
