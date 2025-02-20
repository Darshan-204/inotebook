import React,{useState} from 'react'
import {Eye, EyeOff} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
  const[signUp,setSignUp]=useState({name:"",email:"",password:"",Confpassword:""})
  const [eye,setEye]=useState(true);
  const[ceye,setCeye]=useState(true);
  const history = useNavigate();
  const onChange=(event)=>
  {
      setSignUp({...signUp,[event.target.name]:event.target.value});
      console.log(signUp);
  }
     const handleSubmit=async(event)=>
     { 
      event.preventDefault(); 
      if(signUp.password!==signUp.Confpassword)
      {
        document.getElementById("wrongpassword").innerHTML=`<i class="fa-solid fa-bug mx-2"></i><span> enter the password correctly<span/>`;
        return;
      }
      const response = await fetch("http://localhost:5000/api/auth/creatuser", {
        method: 'POST',
        headers: {
          "content-Type": "application/json",
        
        },
        body: JSON.stringify({name:signUp.name,email:signUp.email,password:signUp.password})
      });
      const json = await response.json();
      console.log(signUp);
      console.log(json);
      if(json.sucess===true){
        localStorage.setItem("token",json.authToken);
        history("/");
         setSignUp({name:"",email:"",password:"",Confpassword:""});
         props.showAlert("sign up successfully ! Thank you","secondary")
      }
      else{
        props.showAlert("user already exist Retry again","warning")
      }

     }




  const ceyeFunctin=()=>
    {
      if(ceye===true)
      {
        setCeye(false);
      }
      else{
        setCeye(true);
      }
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
    <div className='container' >
      <form className='container' style={{width:"441px"}} onSubmit={handleSubmit}>
      <div className="form-group container" style={{width:"400px"}}>
    <label htmlFor="">Name </label>
    <input type="text" className="form-control" id="" name='name' aria-describedby="emailHelp" value={signUp.name} onChange={onChange} placeholder="Enter name"/>
  </div>
  <div className="form-group container" style={{width:"400px"}}>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" value={signUp.email} onChange={onChange} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-2 container" style={{width:"400px"}}>
    <label htmlhtmlFor="password">Password</label>
    <div className='d-flex flex-row'>
    <input style={{paddingRight:"0px",borderRadius:"5% 0% 0% 5%"}} name="password" type={eye?"password":"text"} value={signUp.password} onChange={onChange} className="form-control"  id="exampleInputPassword1" placeholder="Password" minLength={5} required/>
    <div style={{border:"2px solid gray",height:"36px",borderWidth:"1px 1px 1px 0px",borderRadius:"0% 15% 15% 0%"} } onClick={eyeFunctin}>{eye?<EyeOff/>:<Eye/>}</div>
    </div>
    </div>
    <div className="form-group my-2 container" style={{width:"400px"}}>
    <label htmlhtmlFor="password">Confirm Password</label>
    <div className='d-flex flex-row'>
    <input style={{paddingRight:"0px",borderRadius:"5% 0% 0% 5%"}} name="Confpassword" type={ceye?"password":"text"} value={signUp.Confpassword} onChange={onChange} className="form-control"  id="exampleInputPassword1" placeholder="confirm Password" minLength={5} required/>
    <div style={{border:"2px solid gray",height:"36px",borderWidth:"1px 1px 1px 0px",borderRadius:"0% 15% 15% 0%"} } onClick={ceyeFunctin}>{ceye?<EyeOff/>:<Eye/>}</div>
    </div>
    </div>
    <div className='d-flex' style={{color:"red",marginLeft:"20px",fontSize:"10px",alignItems:"center"}} id='wrongpassword'></div>

  <div className="form-group form-check container d-flex">
    <input type="checkbox" className="form-check-input mx-2" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
