import React, { useState } from 'react';

function EightBall(props) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");
  const [counters, setCounters] = useState({
    green: 0,
    goldenrod: 0,
    red: 0
  });

  const handleClick = () => {
    const randomAnswer = props.answers[Math.floor(Math.random() * props.answers.length)];
    setColor(randomAnswer.color);
    setMessage(randomAnswer.msg);
    setCounters(prevCounters => ({
      ...prevCounters,
      [randomAnswer.color]: prevCounters[randomAnswer.color] + 1
    }));
  };

  const handleReset = () => {
    setColor("black");
    setMessage("Think of a Question");
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px'
    },
    ball: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      backgroundColor: color,
      color: color === 'black' ? 'white' : 'black'
    },
    resetBtn: {
      marginTop: '20px'
    },
    counters: {
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <div 
        style={styles.ball}
        onClick={handleClick}
      >
        <p>{message}</p>
      </div>
      <button style={styles.resetBtn} onClick={handleReset}>Reset</button>
      <div style={styles.counters}>
        <p>Green: {counters.green}</p>
        <p>Goldenrod: {counters.goldenrod}</p>
        <p>Red: {counters.red}</p>
      </div>
    </div>
  );
}

export default EightBall;
