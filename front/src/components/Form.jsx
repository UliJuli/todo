import React, { useState } from 'react';

import {addToDoThunk} from '../store/actions'


export default function Form() {
    const [inputValue, setinputValue] = useState('');

    const addValue = (e) => {
      setinputValue(e.target.value); 
    }
    
  return (
    <div>
        <input onChange={addValue} type="text" value={inputValue} placeholder='What needs to be done?'/>
        <button onClick={()=> addToDoThunk(setinputValue)}>Add</button>
    </div>
  )
}
