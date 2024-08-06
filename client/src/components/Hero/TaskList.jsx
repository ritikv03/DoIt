import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks.length > 0 && (
        <div className="task-list-container">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <input type="checkbox" className="task-checkbox" />
              <div className="task-text">{task}</div>
              <div className="task-divider"></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TaskList;
