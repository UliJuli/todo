import './App.css';
import  { useState } from 'react';
import Form from './components/Form';

import Context from './context';
import ToDoList from './components/ToDoList';

function App() {
const [ toDoList, setToDoList] = useState([])
const [formValue, setformValue] = useState('')
const addToDo = () => {
  setToDoList([...toDoList, { name: formValue, status: false, id: Math.floor(Math.random() * (100 + 1) - 1)}])
  setformValue('')  
}
  return (
    <Context.Provider value={{ addToDo, setformValue, formValue, toDoList, setToDoList }}>
    <div className="App">
     <Form />
     <ToDoList />
    </div>
    </Context.Provider>
  );
}

export default App;
