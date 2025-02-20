import './App.css';
import { useEffect, useState } from 'react';
import Navbar from "./compounds/Nabar"
import Home from "./compounds/Home"
import Book from "./compounds/Book"
import About from "./compounds/About"
import NoteState from "./context/NoteState"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './compounds/Contact';
import Alert from './compounds/Alert';
import Login from './compounds/Login';
import SignUp from './compounds/SignUp';
function App() {
  const[loading,setLoading]=useState(false);
  const[kannada,setKannada]=useState(false);
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({msg:message,type:type});
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  useEffect(()=>{
    showAlert("you have enter the page","success");
  
     // eslint-disable-next-line
},[])

  
  return (
   <>
   <NoteState>
   <Router>
   <div className="App">
   <Navbar lan={kannada} language={setKannada}/>
   <Alert alert={alert}/>
   <div style={{marginBottom:"15px"}} className='my-3'>
   <h2  className='my-3'>{kannada?" ವಿದ್ಯಾರ್ಥಿಗಾಗಿ ನೋಟ್ಬುಕ್ ":"iNotebook for Student"}</h2></div>
   <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About lan={kannada}/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/notes' element={<Book showAlert={showAlert}/>}></Route>
    <Route exact path='/login' element={<Login showAlert={showAlert}/>}></Route>
    <Route exact path='/signUp' element={<SignUp showAlert={showAlert}/>}></Route>

    </Routes>
   </div></Router>
   
   </NoteState>
   
   
   
  
  </>
  );
}

export default App;
