import { useState } from 'react';
import './App.css';

function App() {
const [ conter,setConter]= useState(15)
const addvalue = () => {
  if(conter<20){
  setConter(conter + 1); // Update state
  }
};
const addvaluemin =()=>{
  if(conter>0)
  setConter(conter-1);
}
  return (
    <>
      <h1>chai our React</h1>
      <h2>Counter valuae {conter}</h2>
      <button onClick={addvalue}>sum</button>
      <button onClick={addvaluemin}>min</button>
    </>
  )
}

export default App
