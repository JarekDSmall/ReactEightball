import React, { useState } from 'react';

function EightBall(props) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  const handleClick = () => {
    const randomAnswer = props.answers[Math.floor(Math.random() * props.answers.length)];
    setColor(randomAnswer.color);
    setMessage(randomAnswer.msg);
  };

  return (
    <div 
      style={{ backgroundColor: color, width: '200px', height: '200px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onClick={handleClick}
    >
      <p>{message}</p>
    </div>
  );
}

export default EightBall;
