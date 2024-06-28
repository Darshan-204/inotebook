import react,{ useState } from "react";
import NoteContext from "./noteContent";
const NoteState=(props)=>
    {
       
        const notes=[
            {
              "_id": "667664d4d9ca6dd7370c25fc",
              "user": "666e91d681b1bf30241e6207",
              "title": "mt name is dhan",
              "description": "please wake up early",
              "tag": "myself",
              "date": "2024-06-22T05:44:52.339Z",
              "__v": 0
            },
            {
              "_id": "667664d4d9ca6dd7370c25fc",
              "user": "666e91d681b1bf30241e6207",
              "title": "mt name is dhan",
              "description": "please wake up early",
              "tag": "myself",
              "date": "2024-06-22T05:44:52.339Z",
              "__v": 0
            },
            {
              "_id": "667664d4d9ca6dd7370c25fc",
              "user": "666e91d681b1bf30241e6207",
              "title": "mt name is dhan",
              "description": "please wake up early",
              "tag": "myself",
              "date": "2024-06-22T05:44:52.339Z",
              "__v": 0
            },
            {
              "_id": "6677acb2b58edcb0a22b9d19",
              "user": "666e91d681b1bf30241e6207",
              "title": "mt name is dhan",
              "description": "please wake up early",
              "tag": "myself",
              "date": "2024-06-23T05:03:46.755Z",
              "__v": 0
            },
            {
              "_id": "6677ad0e416aaa5dc9df53b7",
              "user": "666e91d681b1bf30241e6207",
              "title": "mt name is dhan",
              "description": "please wake up early",
              "tag": "myself",
              "date": "2024-06-23T05:05:18.042Z",
              "__v": 0
            },
            {
              "_id": "6677ad0e416aaa5dc9df53b9",
              "user": "666e91d681b1bf30241e6207",
              "title": "mt name is darshan m p",
              "description": "please wake up early",
              "tag": "myself",
              "date": "2024-06-23T05:05:18.641Z",
              "__v": 0
            }
          ]
          const[state,setState]=useState(notes)


        return(
            <NoteContext.Provider value={{state,setState}}>
                {props.children}

            </NoteContext.Provider>
        )
    }
export default NoteState;