import React, { useEffect } from 'react';
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa';
import './TaskList.css';

const TaskList = ({ tasks, updateTasks, isCardMode }) => {
  useEffect(() => {
    // Save tasks to localStorage whenever they change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleStar = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, starred: !task.starred } : task
    );
    updateTasks(updatedTasks);
  };

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    updateTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    updateTasks(updatedTasks);
  };

  const handleEditClick = (taskId) => {
    // Add logic to open the edit menu component
    console.log('Edit task:', tasks.find(task => task.id === taskId));
  };

  // Separate tasks into completed and not completed
  const notCompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // Debugging: log tasks and states
  console.log('Not Completed Tasks:', notCompletedTasks);
  console.log('Completed Tasks:', completedTasks);

  return (
    <>
      {notCompletedTasks.length > 0 && (
        <div className={`task-list-container ${isCardMode ? 'card-mode' : ''}`}>
          {notCompletedTasks.map(task => (
            <div key={task.id} className={`task-item ${isCardMode ? 'card-item' : ''}`}>
              <div className="task-content">
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={task.completed || false}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <div className={`task-text ${task.completed ? 'completed' : ''}`}>
                  {task.text}
                </div>
              </div>
              <div className="task-icons">
                <FaEdit className="task-edit" onClick={() => handleEditClick(task.id)} />
                <FaStar
                  className={`task-star ${task.starred ? 'filled' : ''}`}
                  onClick={() => toggleStar(task.id)}
                />
                <FaTrash
                  className="task-delete"
                  onClick={() => handleDeleteTask(task.id)}
                />
              </div>
              {!isCardMode && <div className="task-divider"></div>}
            </div>
          ))}
          {completedTasks.length > 0 && (
            <div className="completed-section">
              <h2>Completed</h2>
              <div className={`completed-list ${isCardMode ? 'card-mode' : ''}`}>
                {completedTasks.map(task => (
                  <div key={task.id} className={`completed-task-item ${isCardMode ? 'card-item' : ''}`}>
                    <input
                      type="checkbox"
                      className="task-checkbox"
                      checked={task.completed || false}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                    <div className="task-text completed">{task.text}</div>
                    <FaTrash
                      className="task-delete"
                      onClick={() => handleDeleteTask(task.id)}
                    />
                    <div className="task-divider completed-divider"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TaskList;
