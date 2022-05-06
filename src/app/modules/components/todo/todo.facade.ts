import { Injectable } from "@angular/core"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { Todo } from "./models/todo.model"

import * as TodoAction from './store/actions'
import * as TodoSelectors from './store/selectors'
import * as TodoState from './store/reducer'

import { RootStoreState } from "src/app/store/root-store.state"

@Injectable()
export class TodoFacade {
    Todos$ = this.store.pipe(select(TodoSelectors.selectTodos)) as Observable<Todo[]>

    constructor(private store: Store<RootStoreState>) {}

    readTodos() {
        this.store.dispatch(TodoAction.readTodos())
    }
    createTodo(create: Todo) {
        this.store.dispatch(TodoAction.createTodo({ create }))
    }
    updateTodo(update: Todo) {
        this.store.dispatch(TodoAction.updateTodo({ update }))
    }
    deleteTodo(id: string) {
        this.store.dispatch(TodoAction.deleteTodo({ id }))
    }
}