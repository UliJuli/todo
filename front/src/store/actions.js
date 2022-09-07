import { todoTypes } from "./type";

export const deleteTodo = (id) => ({ type: todoTypes.DELETE_TODO, payload: { id } });
export const setTodo = (data) => ({ type: todoTypes.SET_LIST, payload: { data } });

export const addTodo = (newData) => ({ type: todoTypes.ADD_LIST, payload: { newData } });

export const doneTodo = (id) => ({ type: todoTypes.DONE_TODO, payload: { id } });

export const loadLoader = (bool) => ({ type: todoTypes.LOADER, payload: { bool } });

export const setError = (msg) => ({ type: todoTypes.ERROR, payload: { msg: msg } });
export const deleteHandlerThunk = (id) => async (dispatch) => {
    dispatch(loadLoader(true))
    dispatch(setError(false));
    try {
        await fetch(`http://localhost:3100/api/delete/${id}`, {
            method: 'DELETE',
            credentials: 'include',
          })
          dispatch(deleteTodo(id));
        } catch (err) {
            console.error("Err", err);
            dispatch(setError(err.message));
          } finally {
            console.log('finally');
            dispatch(loadLoader(false));
          }
  };

  export const doneHandlerThunk = (id) => async (dispatch) => {
    dispatch(loadLoader(true));
    dispatch(setError(false));
    try {
        await fetch(`http://localhost:3100/api/change/${id}`, {
            method: 'PUT',
            credentials: 'include',
        })
        dispatch(doneTodo(id));
    } catch (err) {
        console.error("Err", err);
        dispatch(setError(err.message));
      } finally {
        console.log('finally');
        dispatch(loadLoader(false));
      }
  };

  export const addToDoThunk = (e, setinputValue) => async (dispatch) => {
    const text = e.target.previousSibling.value;
    dispatch(loadLoader(true));
    dispatch(setError(false));
  try {
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
      dispatch(addTodo(data.newList[0]))
    } else {
      alert('Уже добавлено')
    }
    setinputValue('');
} catch (err) {
    console.error("Err", err);
    dispatch(setError(err.message));
  } finally {
    console.log('finally');
    dispatch(loadLoader(false));
  }
  };