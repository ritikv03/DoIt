import React, { useState } from 'react';
import { FaStar, FaEdit } from 'react-icons/fa';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  const [starredTasks, setStarredTasks] = useState([]);
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);

  const toggleStar = (index) => {
    if (starredTasks.includes(index)) {
      setStarredTasks(starredTasks.filter((i) => i !== index));
    } else {
      setStarredTasks([...starredTasks, index]);
    }
  };

  const handleEditClick = () => {
    setIsEditMenuOpen(!isEditMenuOpen);
    // Additional logic to open the menu from the right side can be implemented here
  };

  return (
    <>
      {tasks.length > 0 && (
        <div className="task-list-container">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <input type="checkbox" className="task-checkbox" />
              <div className="task-text">{task}</div>
              <FaEdit className="task-edit" onClick={handleEditClick} />
              <FaStar
                className={`task-star ${starredTasks.includes(index) ? 'filled' : ''}`}
                onClick={() => toggleStar(index)}
              />
              <div className="task-divider"></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TaskList;
