import React, { useState } from "react"; 

export default function Main() {
    const [count, setCount] = useState(0); 

    const increase = () => { 
        setCount(count + 5); 
    }
        const reset = () =>{
            setCount(count (0));

        }
  return (
    <div>

<button onClick={increase}>Add</button>
<button onClick={reset}>reset</button>


    <div className='text'>
      <h2>Yeeehhh....!Start pressing the button. Let's see how fast you are..</h2>


      </div>
    </div>
  )
}