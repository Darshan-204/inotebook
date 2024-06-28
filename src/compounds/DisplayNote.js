import React from 'react'
import noteContext from '../context/noteContent'
import { useContext } from 'react';
import Noteitem from './Noteitem';

export default function DisplayNote() {
    const a = useContext(noteContext);
    const { state, setState } = a;
    return (
        <div className='my-5'>
            <h2>Your note</h2>
            <div className='row'>
            {state.map((element) => {
                        return  <div className='col-md-4 mb-3'>
                    <Noteitem note={element} /></div>
                    })}
                <div className='col-md-4'>
                    
                </div>

            </div>



        </div>
    )
}
