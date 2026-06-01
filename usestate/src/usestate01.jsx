import { memo, useState } from 'react';
import './index.css'


const Usestate01 = () => {
    const[count,setCount]=useState(0);
        function increaseCount(){
            setCount(count+1)}
        function decreaseCount(){
            setCount(count-1)}
           
            
        
    
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>decrease</button>
    </div>
  );
};

export default memo(Usestate01);