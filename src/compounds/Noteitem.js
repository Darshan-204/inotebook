import React from 'react'

export default function Noteitem(props) {
  const  {note}= props;
  return (
    <div>
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description} <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias sed suscipit. Deserunt, odit excepturi?</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}
