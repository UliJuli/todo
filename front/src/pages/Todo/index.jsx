import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ToDoList from '../../components/ToDoList';
import Form from '../../components/Form';

import { setTodo, loadLoader } from '../../store/actions'

const ToDoPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            dispatch(loadLoader(true))
            try {
                const res = await fetch('http://localhost:3100/api/list', {
                    method: 'GET',
                    credentials: 'include',
                });
                dispatch(loadLoader(false))
                const data = await res.json();
                dispatch(setTodo(data.list))
            } catch (error) {
                console.log(error)
            }
        })();
    }, [dispatch]);

    return (
        <><Form />
            <ToDoList /></>
    )
}


export default ToDoPage;