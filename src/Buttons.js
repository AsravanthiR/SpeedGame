//import { red } from "@material-ui/core/colors";
//import React from "react";
import React, { useState } from 'react';

function Buttons() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [score, setScore] = useState(0);
  
    const handleClick = (buttonName) => {
      // If the same button is clicked again, keep adding the scorepoints
      if (selectedButton !== buttonName) {
        setScore((prevScore) => prevScore + 5);
      }
      setSelectedButton(buttonName);
    };

  //making sure that one button is clicked at the time
  return (
    //chatgpts given
        <div>
        <p>Score: {score}</p>
        <button onClick={() => handleClick('LEFT')} disabled={selectedButton === 'LEFT'}>
            LEFT
        </button>
        <button onClick={() => handleClick('MIDDLE')} disabled={selectedButton === 'MIDDLE'}>
            MIDDLE
        </button>
        <button onClick={() => handleClick('RIGHT')} disabled={selectedButton === 'RIGHT'}>
            RIGHT
        </button>
        </div>
        );
}

export default Buttons;