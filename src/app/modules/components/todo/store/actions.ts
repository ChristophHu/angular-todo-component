import { createAction, props } from "@ngrx/store"
import { Todo } from '../models/todo.model'

// besatzung
export const readTodos = createAction(
	"[Edit Todo Dialog] Load Todos"
)
export const readTodosSuccess = createAction(
	"[Edit Todo Dialog] Todos Loaded",
	props<{ todos: Todo[] }>()
)
export const createTodo = createAction(
	"[Edit Todo Dialog] Todo Insert",
	props<{ create: Todo }>()
)
export const createTodoSuccess = createAction(
	"[Edit Todo Dialog] Todo Insert Success",
	props<{ action: { create: Todo }, id: string }>()
)
export const updateTodo = createAction(
	"[Edit Todo Dialog] Todo Updates",
	props<{ update: Todo }>()
)
export const updateTodoSuccess = createAction(
	"[Edit Todo Dialog] Todo Updates Success",
	props<{ update: Todo }>()
)
export const deleteTodo = createAction(
	"[Edit Todo Dialog] Todo Delete",
	props<{ id: string }>()
)
export const deleteTodoSuccess = createAction(
	"[Edit Todo Dialog] Todo Delete Success",
	props<{ id: string }>()
)