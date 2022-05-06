import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, switchMap, concatMap } from "rxjs"
import { Todo } from "../models/todo.model"
import { TodoService } from "../todo.service"

import { createTodo, createTodoSuccess, deleteTodo, deleteTodoSuccess, readTodos, readTodosSuccess, updateTodo, updateTodoSuccess } from "./actions"

@Injectable()
export class TodoEffects {

    // Todo
    createTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createTodo),
            switchMap(action => {
                return this._todoService.createTodo(action.create).pipe(
                    map(id => createTodoSuccess({ action, id }))
                )
            })
        )
    })
    readTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(readTodos),
            concatMap(action => this._todoService.readTodos()),
            map((todos: Todo[]) => readTodosSuccess({ todos }))
        )
    })
    updateTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateTodo),
            switchMap(action => {
                return this._todoService.updateTodo(action.update).pipe(
                    map(() => updateTodoSuccess({ update: action.update }))
                )
            })
        )
    })
    deleteTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteTodo),
            switchMap(action => {
                return this._todoService.deleteTodo(action.id).pipe(
                    map(() => deleteTodoSuccess({ id: action.id }))
                )
            })
        )
    })

    constructor(private actions$: Actions, private _todoService: TodoService ) {}
}