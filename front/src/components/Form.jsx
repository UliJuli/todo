import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


import { addToDoThunk } from '../store/actions'


export default function Form() {
  const dispatch = useDispatch();

  const [inputValue, setinputValue] = useState('');

  const addValue = (e) => {
    setinputValue(e.target.value);
  }

  return (
    <div>
      <input onChange={addValue} type="text" value={inputValue} placeholder='What needs to be done?' />
      <button onClick={(e) => dispatch(addToDoThunk(e, setinputValue))}>Add</button>
    </div>
  )
}
