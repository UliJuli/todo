import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { ItemToDo } from './ItemToDo';

import { deleteHandlerThunk, doneHandlerThunk } from '../store/actions';

export default function ToDoList() {
    const todoList = useSelector((store) => store.todoList);
    const dispatch = useDispatch();

    return (
        <> {todoList && <div>
            <h2>To Do List</h2>
            {todoList?.map((todo) => {
                return <ItemToDo key={todo.id} todo={todo} deleteHandler={() => dispatch(deleteHandlerThunk(todo.id))} doneHandler={() => dispatch(doneHandlerThunk(todo.id))}/>
            })}
        </div>}</>
        
    )
}
