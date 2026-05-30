import { memo } from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18'>
      <h1 className='bg-black text-white py-3 px-4 rounded-full '>Target Audience</h1>
      <button className='bg-gray-200 px-6 py-2 uppercase text-black rounded-full tracking-widest text-sm'>digital banking platform</button>
    </div>
  );
};

export default memo(Navbar);