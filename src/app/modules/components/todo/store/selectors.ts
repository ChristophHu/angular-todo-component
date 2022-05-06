import { createFeatureSelector, createSelector } from "@ngrx/store"
import { TodoState } from "./reducer"

export const todoState = createFeatureSelector<TodoState>('todo-component')

export const selectTodos = createSelector(
    todoState,
    state => state.todos
)