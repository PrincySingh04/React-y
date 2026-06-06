import { memo, useEffect, useState } from 'react';
import axios from 'axios'


const App = () => {
  const [userData,setUserData]=useState([])
  const getData=async()=>{
    const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    setUserData(response.data)
    // console.log(response.data)
  }
  useEffect (function(){
    getData()
  },[])

  let printUserData='NoUserAvailabe'
  if (userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url}target='_blank'>
      <div className='h-40 w-44 bg-white overflow-hidden'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />

      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
      </a>
      </div> 
    })
  }
  return (
    <div className='bg-black h-screen text-white p-4'>
      {/* <button
      onClick={getData} 
      className='bg-green-600 mb-3 active:scale-95 rounded text-white px-6 py-2'>get data</button> */}
      <div className='flex flex-wrap gap-4'>
        {
          printUserData
        }
      </div>
    </div>
    
  );
};

export default memo(App);