import React from "react";

const CountDownTimer = ({ minutes, seconds, completed }) => {
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <span className="countdown font-mono text-4xl">
            <span> {minutes}</span>
          </span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 12 }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
