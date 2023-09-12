import React, { useState } from 'react';

function EightBall(props) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  const handleClick = () => {
    const randomAnswer = props.answers[Math.floor(Math.random() * props.answers.length)];
    setColor(randomAnswer.color);
    setMessage(randomAnswer.msg);
  };

  const handleReset = () => {
    setColor("black");
    setMessage("Think of a Question");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div 
        style={{ 
          backgroundColor: color, 
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          cursor: 'pointer' 
        }}
        onClick={handleClick}
      >
        <p style={{ color: color === 'black' ? 'white' : 'black' }}>{message}</p>
      </div>
      <button style={{ marginTop: '20px' }} onClick={handleReset}>Reset</button>
    </div>
  );
}

export default EightBall;
