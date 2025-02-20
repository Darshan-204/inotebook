import React, { useContext } from 'react'
import noteContext from '../context/noteContent';
export default function Noteitem(props) {
  const  {note,updateNOTE}= props;
 const {deleteNote,editNote}=useContext(noteContext);

  
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <div className="container d-flex align-items-center"> <h5 className="card-title my-3">{note.title}</h5>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i> {/*note._id*/}
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNOTE(note)}}></i></div>
   
    <p className="card-text">{note.description}
    <br/>{`#${note.tag}`}</p>
     <a href="#" className="btn btn-primary">Go somewhere</a>
   
  </div>
</div>
    </div>
  )
}
