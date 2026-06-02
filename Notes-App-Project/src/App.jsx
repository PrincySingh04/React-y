import { useState } from "react";
import { memo } from 'react';
import './index.css'

const App = () => {
   const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      description,
    };

    setNotes([...notes, newNote]);

    setTitle("");
    setDescription("");
  };
  
  
  return (
  
  <div className="main">
      <div className="form-section">
    <h2>Add Notes</h2>
   
   <form onSubmit={handleSubmit}>
    
    <input type="text" placeholder="Add Notes Title"  value={title}
          onChange={(e) => setTitle(e.target.value)}/>
          
    <textarea placeholder="Write Details" name="" id=""  value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
    <button type="submit">Add Note</button>
   </form>
   </div>
   
   <div className="notes">
    <h2>Your notes</h2>
   
   <div className="card-container">
     {notes.map((note, index) => (
    <div className="cards" key={index}>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
    </div>
  ))}
    
 
</div> 
   </div>
  </div>

   
  
  );
};

export default memo(App); 