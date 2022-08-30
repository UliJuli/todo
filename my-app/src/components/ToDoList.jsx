import React, { useState, useContext } from 'react';

import Context from '../context';

import styles from './styles.module.css'

export default function ToDoList() {
    const {  toDoList, setToDoList } = useContext(Context);
    const [flag, setFlag] = useState(false);
    const [editInput, seteditInput] = useState('');
    const [idInput, setidInput] = useState(null);
    const deleteHandler = (e) => {
        const filtered = toDoList.filter((todo) => {
            return Number(todo.id) !== Number(e.target.name)
        });
        setToDoList(filtered);
    }

    const editHandler = (e) => {
        console.log(flag)
        const text = e.target.parentNode.children[2].textContent;
        seteditInput(text);
        setFlag(true);
        setidInput(e.target.name)
        console.log(flag)
    }

    const changeHandler = (e) => {
        seteditInput(e.target.value)
    }


    const okHandler = (e) => {
        const arr = toDoList.map((todo) => {
            if (Number(todo.id) === Number(idInput)) {
                todo.name = editInput;
                return todo
            }
            return todo;
        })
        setToDoList(arr);
        setFlag(false);
    }
    const checkBoxHandler = (e) => {
        const newArr = toDoList.map((todo) => {
            if (Number(todo.id) === Number(e.target.name)) {
                todo.status = !todo.status;
                return todo
            }
            return todo;
        })
        setToDoList(newArr);
    }
    return (
        <div>
            <h2>To Do List</h2>
            {toDoList.map((todo) => (
                todo.status ? (
                    <div className={styles.flex} key={todo.id}>
                        <input checked={todo.status} name={todo.id} type="checkbox" onChange={checkBoxHandler} />
                        <span>*</span>
                        <p className={styles.todoDone}>{todo.name}</p>
                        <button name={todo.id} onClick={deleteHandler}>delete</button>
                        <button name={todo.id} onClick={editHandler}>edit</button>
                    </div>)
                    : (
                        <div className={styles.flex} key={todo.id}>
                            <input checked={todo.status} name={todo.id} type="checkbox" onChange={checkBoxHandler} />
                            <span>-</span>
                            <p>{todo.name}</p>
                            <button name={todo.id} onClick={deleteHandler}>delete</button>
                            <button name={todo.id} onClick={(e)=>editHandler(e)}>edit</button>
                        </div>)
            ))}
            {flag && (<><input onChange={changeHandler}type='text' name='editInput'value={editInput}/><button onClick={okHandler}>ok</button></>)}
        </div>
    )
}
