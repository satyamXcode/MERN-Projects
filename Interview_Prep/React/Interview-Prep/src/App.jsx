 import { useState } from 'react'
import './App.css'
import Navbar01 from './components/Navbar01'
import { counterContext } from './Context/context01';

function App() {
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1);
  }

  return (
    <>
    <counterContext.Provider value={count}>
       <Navbar01 count={count}/>
       <button onClick={increaseCount}>Increase Count</button>
       </counterContext.Provider>
    </>
  )
}

export default App
