import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom'
import {Eye, EyeOff} from 'lucide-react';
export default function Login(props) {
  const history = useNavigate();
  const [eye,setEye]=useState(true); 
  const[login,setLogin]=useState({email:"",password:""})
  const onChange=(event)=>
  {
     setLogin({...login,[event.target.name]:event.target.value})
  }
  const handleSubmit=async(event)=>
  {
    event.preventDefault(); 
const response = await fetch("http://localhost:5000/api/auth/login", {
  method: 'POST',
  headers: {
    "content-Type": "application/json",
  
  },
  body: JSON.stringify({email:login.email,password:login.password})
});
const json = await response.json();
   // console.log(json);
   // console.log(login);
  
    if(json.sucess===false)
    {
       document.getElementById("msg").innerHTML="<h6>Retry again<h6/>";
       props.showAlert("invalid credentials","warning")
       return;
    }


      localStorage.setItem("token",json.authToken);
      
      props.showAlert("login successfully ! Thank you","secondary")
      history("/");
       setLogin({email:"",password:""})
    
  
    
  }
  const eyeFunctin=()=>
  {
    if(eye===true)
    {
      setEye(false);
    }
    else{
      setEye(true);
    }
  }

  return (
    <div className='my-9' style={{position:"relative",top:"70px"}}>
        <div className='container' style={{width:"400px"}}>
        <form onSubmit={handleSubmit}>
    
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-2" style={{width:"370px"}}>
    <label htmlFor="password">Password</label>
    <div className='d-flex flex-row'>
    <input style={{paddingRight:"0px",borderRadius:"5% 0% 0% 5%"}} name="password" value={login.password} type={eye?"password":"text"} className="form-control" onChange={onChange} id="exampleInputPassword1" placeholder="Password"/>
    <div style={{border:"2px solid gray",height:"36px",borderWidth:"1px 1px 1px 0px",borderRadius:"0% 15% 15% 0%"} } onClick={eyeFunctin}>{eye?<EyeOff/>:<Eye/>}</div>
    </div>
    

  </div>
  <div id="msg"></div>
  <div className="form-group form-check d-flex">
    <input type="checkbox" className="form-check-input mx-2" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>

        </div>
       
    </div>
  )
}
