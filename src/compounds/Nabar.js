import React ,{useEffect} from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Nabar = (props) => {
  const [state,setState]=useState({});
  let location=useLocation();
  const history=useNavigate();
  useEffect(()=>
    {
    console.log(location.pathname);
    },[location]);
 
  let setfun=()=>
    { 
      if(props.lan===true){
      props.language(false)}
      else{
      props.language(true)}
    }
    const handleLogout=()=>
    {
      localStorage.removeItem("token");
      history("/login");

    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">


    <a className="navbar-brand" href="/"><i class="fa-solid fa-book mx-2"></i>{props.lan?"ನೋಟ್ಬುಕ್":"iNotebook"}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/*bg-${location.pathname==="/"?"primary":""}*/}
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/"><i class="fa-solid fa-house mx-2"></i>{props.lan?"ಮನೆ":"Home"}</Link>
        </li>
        <li className="nav-item">
          <Link  className= {`nav-link ${location.pathname==="/about"?"active":""}`} to="/about"><i class="fa-solid fa-info mx-2"></i>{props.lan?"ಮಾಹಿತಿ":"About"}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/contact"?"active":""}`} to="/contact"><i class="fa-solid fa-address-book mx-2"></i>{props.lan?"ಸ೦ಪರ್ಕ":"Contact"}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/notes"?"active":""}`} to="/notes"><i class="fa-solid fa-note-sticky mx-2"></i>{props.lan?"ಸೂಚನೆ":"Notes"}</Link>
        </li>
      
 </ul>
 <div className="d-flex">
   <button onClick={setfun} className="btn btn-outline-success"><i class="fa-solid fa-language"></i>{/*props.lan?"English":"ಕನ್ನಡ"*/}</button>
      
      <form className="d-flex" role="search">
        {!localStorage.getItem("token")? <span className='d-flex'><Link to="/login" className="btn btn-outline-success mx-2" role='button'>login</Link>
          <Link to="/signUp" className="btn btn-outline-success mx-1" role='button'>SignUp</Link></span>:<button className='btn btn-outline-success mx-2' onClick={handleLogout}>logout</button>}
      
         <input className="form-control mx-1" type="search" placeholder={props.lan?"ಹುಡುಕಿ":"Search"} aria-label="Search"/>
       

      </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nabar
