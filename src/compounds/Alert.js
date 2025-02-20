import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>
  {
    const lower=word.toLowerCase();
    const upper=lower.charAt(0).toUpperCase()+lower.slice(1);
    return upper;
  }
 
  return (
    <>  
    
    {props.alert && <div style={{padding:"4px",position:"sticky"}} className={`alert alert-${props.alert.type}`} role="alert">
                  {props.alert.msg}
</div> }
  </>
  )
}
