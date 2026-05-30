import { memo } from 'react';
import 'remixicon/fonts/remixicon.css'
import Rightcard from './rightcard';

const Rightcontent = (props) => {
  return (
    <div className='h-full w-2/3 flex rounded-4xl overflow-x-auto gap-10 p-6 '>
      {props.users.map(function(elem){
        return <Rightcard img={elem.img}/>
      })}
      
        


      
    </div>
  );
};

export default memo(Rightcontent);