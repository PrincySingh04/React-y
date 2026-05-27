
import { memo } from 'react';
import Cards from './cards';

const App = () => {
  return (
    <div>
      <Cards/>
    </div>
  );
};

export default memo(App);