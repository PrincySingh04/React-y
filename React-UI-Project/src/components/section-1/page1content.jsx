import { memo } from 'react';
import Leftcontent from './leftcontent';
import Rightcontent from './rightcontent';

const Page1content = (props) => {
  return (
    <div className='h-screen  flex gap-10 items-center py-3 px-18 text-black'>
       <Leftcontent/>
       <Rightcontent users={props.users}/>
    </div>
  );
};

export default memo(Page1content);