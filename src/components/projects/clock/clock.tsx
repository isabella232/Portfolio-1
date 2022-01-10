import React from "react";

const Clock = () => {
  return (
    <div id="clock" className="dark">
      <div className="display">
        <div className="weekdays"></div>
        <div className="ampm"></div>
        <div className="digits"></div>
      </div>
      <div className="date">
        <p className="date-text"></p>
      </div>
    </div>
  );
};

export default Clock;
