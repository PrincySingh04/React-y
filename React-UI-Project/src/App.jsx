import { memo } from 'react';
import Section1 from './components/section-1/section-1';
import Section2 from './components/section-2/section-2';


const App = () => {
  const users=[
    {
      img : "https://images.unsplash.com/photo-1676054922188-0107802c97fe?q=80&w=656&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro : "",
      tag : "Satisfied"
    },
    {
      img : "https://images.unsplash.com/photo-1621376225379-a1514a710666?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro : "",
      tag : "Underserved"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1664474865451-a15999296765?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro : "",
      tag : "Underbanked"
    }
    ,
    {
      img : "https://images.unsplash.com/photo-1676054922188-0107802c97fe?q=80&w=656&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro : "",
      tag : "Satisfied"
    }
  ]
  return (
    <div>
       <Section1 users={users}/>
       <Section2/>
    </div>
  );
};

export default memo(App);