import { useState } from "react";
import { useEffect } from "react";
import { memo } from 'react';

const App = () => {
  const[num,setNum]=useState(0)
  const[num2,setNum2]=useState(100)
  useEffect(function(){
    console.log('useEffect is running...')
  },[])
  return (
    <div>
      <h1>num{num}</h1>
      <h1>num{num2}</h1>
      <button onClick={()=>setNum(num+1)}  onDoubleClick={() => setNum2(num2 + 1)}
>click</button>
      </div>)}
   export default App