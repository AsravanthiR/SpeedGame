import React, { useState, useEffect } from 'react';

function Buttons() {
  const buttonNames = ['LEFT', 'MIDDLE', 'RIGHT'];
  const [selectedButton, setSelectedButton] = useState(null);
  const [score, setScore] = useState(0);

  const getRandomButton = () => {
    const randomIndex = Math.floor(Math.random() * buttonNames.length);
    return buttonNames[randomIndex];
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setScore((prevScore) => prevScore + 5);
  };

  return (
    <div>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          onClick={() => handleButtonClick(buttonName)}
          className={selectedButton === buttonName ? 'selected' : ''}
        >
          {buttonName}
        </button>
      ))}
      <p>Score: {score}</p>
    </div>
  );
}

export default Buttons;
