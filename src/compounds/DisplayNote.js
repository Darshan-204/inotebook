import React, {useState, useEffect ,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/noteContent'
import { useContext } from 'react';
import Noteitem from './Noteitem';

export default function DisplayNote(props) {
    const a = useContext(noteContext);
    const location=useNavigate();
    const { state,getAllNotes,editNote} = a;
    useEffect(()=>{

      if(localStorage.getItem('token')){
        getAllNotes();
        console.log("11111");
      }
      else{
        location("/login");
        console.log("12345")
      }
        
         // eslint-disable-next-line
    },[])
    const[note,setNote]=useState({eid:"",etitle:"",edescription:"",etag:""});
    const ref=useRef(null);
    const refClose=useRef(null);
    const updateNOTE=(currentNote)=>
        {
             ref.current.click();
             setNote({eid:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
        }
        const handleClick=(event)=>
          { 
            //event.preventDefault();
            editNote(note.eid,note.etitle,note.edescription,note.etag);
            refClose.current.click(); 
            props.showAlert("edited the note sucessfully","primary");
            console.log("updating the note")  // it will delete all event perform the button or other element
        
              // addNote(note.title,note.description,note.tag);
          }
          
          const onChange=(event)=>
            {
                setNote({...note,[event.target.name]:event.target.value})
            }


    return (
        <>
    
<button style={{display:"none"}} type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-between">
        <h5 className="modal-title" id="exampleModalLabel">Edit the Note ... </h5>
        <button type="button " className="close flex-end" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
                      <form className="container" style={{width:"80%"}} action=''>
                          <div className="mb-3">
                            <label htmlFor="etitle" className="form-label">Title</label>
                            <input type="text" className="form-control" value={note.etitle} id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                            </div>
                          <div className="mb-3">
                            <label htmlFor="edescription" className="form-label">Description</label>
                            <input type="text" className="form-control" value={note.edescription} id="edescription" name='edescription' onChange={onChange} minLength={5} required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="etag" className="form-label">Tag</label>
                            <input type="text" className="form-control" value={note.etag} id="etag" name='etag' onChange={onChange}/>
                          </div>
                          <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label d-flex" htmlFor="exampleCheck1">Check me out</label>
                          </div>
                        </form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.edescription.length<5||note.etitle.length<5}  type="button" className="btn btn-primary" onClick={handleClick} /*data-bs-dismiss="modal"*/>Update Note</button>
      </div>
    </div>
  </div>
</div>



        <div className='my-5'>
            <h2>Your note</h2>
            <div className='row'>
              {state.length===0 && <h4>No notes to display</h4>}
            {state.map((element) => {
                        return  <div className='col-md-4 mb-3'>
                    <Noteitem note={element} updateNOTE={updateNOTE}/></div>
                    })}
                <div className='col-md-4'>
                    
                </div>

            </div>



        </div>
        </>
    )
}
