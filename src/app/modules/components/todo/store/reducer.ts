import { createReducer, on } from "@ngrx/store"
import { createTodoSuccess, deleteTodoSuccess, readTodosSuccess, updateTodoSuccess } from './actions'
import { Todo } from '../models/todo.model'

export interface TodoState {
    todos: Todo[] | undefined
}

export const initialDataState: TodoState = {
    todos: undefined
}

export const TodoReducer = createReducer(
    initialDataState,

    on(readTodosSuccess, (state, action) => {
        return {
            ...state,
            todos: action.todos
        }
    }),
    on(createTodoSuccess, (state, action) => {
        let Todo: Todo = Object.assign({}, action.action.create, { id: action.id })
        let cleared: Todo[] | undefined = state.todos
        cleared = [...cleared!, ...[Todo]]
        return {
            ...state,
            todos: cleared
        }
    }),
    on(updateTodoSuccess, (state, action) => {
        let cleared: Todo[] = [...state.todos!]
        cleared = cleared.filter(el => el.id != action.update.id)
        cleared.push(action.update)
        return {
            ...state,
            todos: cleared
        }
    }),
    on(deleteTodoSuccess, (state, action) => {
        let cleared: Todo[] | undefined = state.todos
        cleared = cleared?.filter(el => el.id != action.id)
        return {
            ...state,
            todos: cleared
        }
    }),
)