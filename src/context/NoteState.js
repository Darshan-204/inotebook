import react, { useState } from "react";
import NoteContext from "./noteContent";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notes = []
  const [state, setState] = useState(notes)
 
  const getAllNotes= async()=>
    {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          "content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      });
      const json=await response.json();
      //console.log(json);
      setState(json)
    }






  //add a not
  const addNote =async (title,description,tag) => {
    //to do api call
    //adding a new note
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({title,description,tag})

    });
  const json=await response.json();
  const newst=json;
  console.log(newst._id)
 const notes={
  "user": "666e91d681b1bf30241e6207",
  "title": title,
  "description": description,
  "tag": tag,
  "_id": json._id,
  "date": "2024-06-29T07:54:17.990Z",
  "__v": 0
}




    setState(state.concat(notes))
  }

  //delete a note
  const deleteNote =async (id) => {
   const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method:'DELETE',
      headers: {
        "content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
     console.log(id);
    //to do api call
    const afterNote = state.filter((element) => {
      return element._id !== id
    })
    setState(afterNote);

  }

  //edit the note
  const editNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',//get delete put
      headers: {
        "content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
      body: JSON.stringify({title,description,tag})

    });
  const json= response.json();

    //logic to edit in client
    let newNOTES=JSON.parse(JSON.stringify(state));
    for (let index = 0; index < newNOTES.length; index++) {
      if (newNOTES[index]._id === id) {
        newNOTES[index].title = title
        newNOTES[index].description = description
        newNOTES[index].tag = tag
         break;
      }
    

    }
    setState(newNOTES);
  }

  return (
    <NoteContext.Provider value={{ state, addNote, deleteNote, editNote,getAllNotes}}>
      {props.children}

    </NoteContext.Provider>
  )
}
export default NoteState;