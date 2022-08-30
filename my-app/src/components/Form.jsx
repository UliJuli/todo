import React, { useContext } from 'react';

import Context from '../context';


export default function Form() {
    const {addToDo, setformValue, formValue} = useContext(Context);

    const addValue = (e) => {
        setformValue(e.target.value); 
    }
  return (
    <div>
        <input onChange={addValue} type="text" value={formValue} placeholder='What needs to be done?'/>
        <button onClick={addToDo}>Add</button>
    </div>
  )
}
