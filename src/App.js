import './App.css';
import { useState } from 'react';
import Navbar from "./compounds/Nabar"
import Home from "./compounds/Home"
import Book from "./compounds/Book"
import About from "./compounds/About"
import NoteState from "./context/NoteState"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './compounds/Contact';
function App() {
  const[kannada,setKannada]=useState(false);
  return (
   <>
   <NoteState>
   <Router>
   <div className="App">
   <Navbar lan={kannada} language={setKannada}/>
   <div style={{marginBottom:"15px"}} className='my-3'>
   <h2  className='my-3'>{kannada?" ವಿದ್ಯಾರ್ಥಿಗಾಗಿ ನೋಟ್ಬುಕ್ ":"iNotebook for Student"}</h2></div>
   <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About lan={kannada}/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/notes' element={<Book/>}></Route>
    </Routes>
   </div></Router>
   
   </NoteState>
   
   
   
  
  </>
  );
}

export default App;
