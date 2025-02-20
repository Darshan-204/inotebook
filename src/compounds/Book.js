import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/noteContent'
import DisplayNote from './DisplayNote';
import { useState } from 'react';
//i am writing the code of home in the the book router
export default function Home(props) {
 const a=useContext(NoteContext);
 const {addNote}=a;
 const[note,setNote]=useState({title:"",description:"",tag:"default"});
 const clearFunction=()=>
 {
  document.getElementById("title").value="";
  document.getElementById("desc").value="";
  document.getElementById("tag").value="";

 }
 const handleClick=(event)=>
  { 
           // it will delete all event perform the button or other element
      event.preventDefault(); 
       addNote(note.title,note.description,note.tag);
      // clearFunction(); they is some problem in it fix it.
      setNote({title:"",description:"",tag:""});
      props.showAlert("you have added the new note","success");
       
    
  }
  
  const onChange=(event)=>
    {
        setNote({...note,[event.target.name]:event.target.value})
    }







 /*useEffect(()=>{
  
     a.update()
     // eslint-disable-next-line 
 },[])*/
  return (
    
    <div className='container my-9' style={{width:"80%"}}>
      <br/>
    <div className='container' style={{width:"50%",border:"2px solid gray",margin:"15px auto",borderRadius:"17px 0px 8% 0px"
    }}>
    <h1 style={{marginTop:"25px"}}>Add a notes</h1>
       <form className="container" style={{width:"80%"}} action=''>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control clear" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
    </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control clear" id="desc" name='description' value={note.description} onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Tag</label>
    <input type="text" className="form-control clear" id="tag" name='tag' value={note.tag} onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input clear" id="exampleCheck1"/>
    <label className="form-check-label d-flex" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button disabled={note.description.length<5||note.title.length<5}   style={{marginBottom:"35px"}} type="submit" className="btn btn-primary my-6" onClick={handleClick}>Add Note</button>
</form>
    </div>
       
      <DisplayNote showAlert={props.showAlert}/>
    </div>
  )
}
