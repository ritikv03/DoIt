import React from 'react';
import { FaStar, FaEdit } from 'react-icons/fa';
import './TaskList.css';

const TaskList = ({ tasks, updateTasks, isCardMode }) => {
  const toggleStar = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, starred: !task.starred } : task
    );
    updateTasks(updatedTasks);
  };

  const handleEditClick = () => {
    // Add logic to open the edit menu component
  };

  return (
    <>
      {tasks.length > 0 && (
        <div className={`task-list-container ${isCardMode ? 'card-mode' : ''}`}>
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <div className="task-content">
                <input type="checkbox" className="task-checkbox" />
                <div className="task-text">{task.text}</div>
              </div>
              <div className="task-icons">
                <FaEdit className="task-edit" onClick={handleEditClick} />
                <FaStar
                  className={`task-star ${task.starred ? 'filled' : ''}`}
                  onClick={() => toggleStar(index)}
                />
              </div>
              {!isCardMode && <div className="task-divider"></div>}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TaskList;
