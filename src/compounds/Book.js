import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/noteContent'
import DisplayNote from './DisplayNote';
//i am writing the code of home in the the book router
export default function Home() {
 const a=useContext(NoteContext);
 const {state,setState}=a;
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
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label d-flex" for="exampleCheck1">Check me out</label>
  </div>
  <button style={{marginBottom:"35px"}} type="submit" class="btn btn-primary my-6">Submit</button>
</form>
    </div>
       
      <DisplayNote/>
    </div>
  )
}
