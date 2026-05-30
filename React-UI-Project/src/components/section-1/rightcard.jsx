import { memo } from 'react';
import Rightcarcontent from './rightcarcontent';

const Rightcard = (props) => {
  return (
    <div className='h-full w-1/3 shrink-0 rounded-4xl overflow-hidden relative'>
        <img className='object-cover h-full w-full' src={props.img} alt="" />
     <Rightcarcontent/>
    </div>
    
  );
}

export default memo(Rightcard);