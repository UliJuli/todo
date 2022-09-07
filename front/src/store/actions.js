import { todoTypes } from "./type";

export const deleteTodo = (id) => ({ type: todoTypes.DELETE_TODO, payload: { id } });
export const setTodo = (data) => ({ type: todoTypes.SET_LIST, payload: { data } });

export const addTodo = (newData) => ({ type: todoTypes.ADD_LIST, payload: { newData } });

export const doneTodo = (id) => ({ type: todoTypes.DONE_TODO, payload: { id } });

export const loadLoader = (bool) => ({ type: todoTypes.LOADER, payload: { bool } });

export const deleteHandlerThunk = (id) => async (dispatch) => {
    dispatch(loadLoader(true))
    dispatch(deleteTodo(id));
    try {
        await fetch(`http://localhost:3100/api/delete/${id}`, {
            method: 'DELETE',
            credentials: 'include',
          })
          dispatch(loadLoader(false))
    } catch (error) {
        console.log(error);
    }
  };

  export const doneHandlerThunk = (id) => async (dispatch) => {
    dispatch(loadLoader(true))
    try {
        await fetch(`http://localhost:3100/api/change/${id}`, {
            method: 'PUT',
            credentials: 'include',
        })
        dispatch(loadLoader(false))
        dispatch(doneTodo(id));
    } catch (error) {
        console.log(error);
    }
  };

  export const addToDoThunk = (e, setinputValue) => async (dispatch) => {
    const text = e.target.previousSibling.value;
  try {
    dispatch(loadLoader(true))
    const res = await fetch('http://localhost:3100/api/add', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text})
    })
    const data = await res.json();
    if(data.newList[1]){
      dispatch(loadLoader(false))
      dispatch(addTodo(data.newList[0]))
    } else {
      alert('Уже добавлено')
    }
    setinputValue('');
  } catch (error) {
    console.log(error);
  }
  };