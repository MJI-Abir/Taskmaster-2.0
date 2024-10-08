import { useState } from "react";

export const ShowTask = ({tasklist, setTasklist}) => {
  

  return (
    <div className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time} </span>
            </p>
            <i className="bi-pencil-square"></i>
            <i className="bi-trash"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};
