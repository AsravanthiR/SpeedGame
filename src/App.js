import './App.css';
import {useState, useEffect } from 'react';
import { RotateLoader } from 'react-spinners';


function App() {

//Jutta created RotateLoader-spinner to show up if game is loading
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [])


  return (

    loading ?
      <RotateLoader color="#36d7b7"  />
      :
    <div className="App">
      <header className="App-header">
        <h1>This text is seen on the website</h1>
      </header>
    </div>
  
  );
}

export default App;
