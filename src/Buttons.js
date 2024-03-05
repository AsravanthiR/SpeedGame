import React, { useState } from 'react';

//buttonelements array, when selected starting from zero
function Buttons() {
  const buttonNames = ['LEFT', 'MIDDLE', 'RIGHT'];
  const [selectedButton, setSelectedButton] = useState(null);
  const [score, setScore] = useState(0);
  const [randomButton, setRandomButton] = useState(null);

  //randomly choosing one button from the array and rounding the desimal
  const getRandomButton = () => {
    const randomIndex = Math.floor(Math.random() * buttonNames.length);
    return buttonNames[randomIndex];
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setScore((prevScore) => prevScore + 5);
  };

  
  setInterval(() => {
    setRandomButton (getRandomButton())
}, 3000);
 

  return (
    <div><div className="buttoncontainer">
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          onClick={() => handleButtonClick(buttonName)}
          className={selectedButton === buttonName ? 'selected' : ''}
          style={randomButton === buttonName ? {border:`20px solid red`}: {}}
        >
          {buttonName}

        </button>
      ))}
              <>{randomButton }</>

     </div>
      <p>Score: {score}</p>
    </div>
  );
}

export default Buttons;
