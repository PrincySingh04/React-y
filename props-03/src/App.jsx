
import { memo } from 'react';
import Cards from './cards';

const App = () => {
  return (
    <div className='container'>
      <Cards user='Shital Dubey'/>
      <Cards user='Riya Sharma'/>
      <Cards user='Princy Singh'/>
    </div>
  );
};

export default memo(App);