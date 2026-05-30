import { memo } from 'react';

const Rightcarcontent = () => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
      
      <div className='mt-auto'>
      
      <p className='text-xl leading-normal text-white mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, saepe nisi. Ipsam incidunt beatae sapiente. Fugit labore praesentium officia quam.</p>
      </div>
      <div className='flex justify-between'>
        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
      </div>
    </div>
  );
};

export default memo(Rightcarcontent);