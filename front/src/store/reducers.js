import { todoTypes } from "./type";

const initState = {
    todoList: [],
    isLoader: false
}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case todoTypes.SET_LIST:
            const newState = action.payload.data
            return { ...state, todoList: newState };
        case todoTypes.ADD_LIST:
            const addState = action.payload.newData
            return { ...state, todoList: [...state.todoList, addState] };
        case todoTypes.DELETE_TODO:
            const filtred = state.todoList.filter((el) => el.id !== action.payload.id)
            return { ...state, todoList: filtred };
        case todoTypes.DONE_TODO:
            const newArr = state.todoList.map((el) => {
                if (el.id === action.payload.id) {
                    el.status = !el.status;
                    return el
                }
                return el;
            })
            return { ...state, todoList: newArr };
        case todoTypes.LOADER:
            const states = action.payload.bool
            return { ...state, isLoader: states };
        default:
            return state;
    }
}