import React ,{useEffect} from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const Nabar = (props) => {
  const [state,setState]=useState({});
  let location=useLocation();
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

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.lan?"ನೋಟ್ಬುಕ್":"iNotebook"}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/*bg-${location.pathname==="/"?"primary":""}*/}
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">{props.lan?"ಮನೆ":"Home"}</Link>
        </li>
        <li className="nav-item">
          <Link  className= {`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">{props.lan?"ಮಾಹಿತಿ":"About"}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/contact"?"active":""}`} to="/contact">{props.lan?"ಸ೦ಪರ್ಕ":"Contact"}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/notes"?"active":""}`} to="/notes">{props.lan?"ಸೂಚನೆ":"Notes"}</Link>
        </li>
      
 </ul>
 <div className="d-flex">
   <button onClick={setfun} className="btn btn-outline-success mx-3">{props.lan?"English":"ಕನ್ನಡ"}</button>
      
      <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder={props.lan?"ಹುಡುಕಿ":"Search"} aria-label="Search"/>
        <button className="btn btn-outline-success" type='submit'>{props.lan?"ಹುಡುಕಿ":"Search"}</button>
      </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nabar
