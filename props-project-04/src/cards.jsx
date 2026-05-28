import { memo } from 'react';
import { Bookmark } from 'lucide-react';


const Cards = (props) => {
  return (
    
       <div className='cards'>
            <div className='top'>
                <img src={props.logo} alt="" />
                <button>Save <Bookmark size={10}/></button>
            </div>
            <div className='center'>
                <h3>{props.company}<span>{props.posted}</span></h3>
                <h2>{props.role}</h2>
                <div className='tag'>
                    <h4>{props.type}</h4>
                    <h4>{props.level}</h4>
                </div>
            </div>
            <div className='bottom'>
                
                    <div>
                        <h3>{props.salary}</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply Now</button>
                
            </div>
        </div>
      
    
  );
};

export default memo(Cards);