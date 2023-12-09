
import { useState } from 'react';
import './App.css';

function App() {
 
  const [count, setCount] = useState(0);

  const counter  = (bool) =>{
    bool ? setCount((el) => el + 1) : setCount((el) => el-1);
  }
  const reset = () =>{
    setCount(0);
  }

  return (
    <div className='wrapper'>

      <h1>{count}</h1>

      <div className='btns'>
        <button onClick={()=>counter(false)}  className='minus'>Minus</button>
        <button onClick={()=>counter(true)}  className='plus'>Plus</button>
        <button onClick={reset}  className='reset'>Reset</button>
      </div>

    </div>
  )
}

export default App
