import React from 'react';

import styles from './styles.module.css'

export const ItemToDo = ({ todo, deleteHandler, doneHandler }) => {
    return (
        todo.status ? (
            <div className={styles.flex} key={todo.id}>
                <input checked={todo.status} onClick={doneHandler} name={todo.id} type="checkbox" />
                <span>*</span>
                <p className={styles.todoDone}>{todo.name}</p>
                <button onClick={deleteHandler} name={todo.id} >delete</button>
            </div>)
            : (
                <div className={styles.flex} key={todo.id}>
                    <input checked={todo.status} onClick={doneHandler} name={todo.id} type="checkbox" />
                    <span>-</span>
                    <p>{todo.name}</p>
                    <button onClick={deleteHandler} name={todo.id}>delete</button>
                </div>)
    )
}