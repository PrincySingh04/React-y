import { memo } from 'react';

const Hero = () => {
  return (
    <div className='p-6'>
        <h3 className=' mb-7 text-7xl font-bold '>Prospective <br /><span className='text-gray-400'>customer</span><br /> segmentation</h3>
        <p className='text-xl font-mediun text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis assumenda libero delectus quod omnis nobis consectetur id aliquam nemo. Quasi.</p>
        </div>
        
  );
};

export default memo(Hero);