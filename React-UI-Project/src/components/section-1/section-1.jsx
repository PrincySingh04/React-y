import { memo } from 'react';
import Navbar from './navbar';
import Page1content from './page1content';


const Section1 = (props) => {
  return (
    <div className="h-full width-full bg-white text-white ">
      <Navbar/>
      <Page1content users={props.users}/>
    </div>
  );
};

export default memo(Section1);