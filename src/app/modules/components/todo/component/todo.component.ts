import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { orderBy } from 'src/app/shared/utils';
import { Todo } from '../models/todo.model';
import { TodoFacade } from '../todo.facade';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  // personal information
  contactForm: FormGroup

  // todolist
  todos: Todo[] = []

  todoForm: FormGroup
  todoArray: FormArray

  constructor(private _formBuilder: FormBuilder, private _todoFacade: TodoFacade) {
    this._todoFacade.readTodos()
    this.contactForm = this._formBuilder.group({
      firstName : ['', [Validators.required]],
      lastName  : ['', [Validators.required]]
    })

    this.todoForm = this._formBuilder.group({
      todo: this._formBuilder.array([

      ]),
    })
    this.todoArray = <FormArray>this.todoForm.get('todo')
  }

  ngOnInit(): void {
    this._todoFacade.Todos$.pipe().subscribe((todos: Todo[]) => {
      this.todos = orderBy(todos, 'date_create')
      this.patch()
    })
  }

  patch() {
    this.todoArray.clear()
    this.todos.forEach((el: any) => {
      this.todoArray.push(this.patchElements(el))
    })
  }
  patchElements(el: any) {
    return this._formBuilder.group({
      id      : [el.id],
      date_create: [el.date_create],
      date_update: [el.date_update],
      value   : [el.value],
      complete: [el.complete]
    })
  }

  addTodo() {
    const newTag =  this._formBuilder.group({
      value: '',
      complete: false
    })
    this.todoArray.push(newTag)
  }
  setTodo(el: any) {
    if (!el.value.id) {
      this.createTodo(el.value)
    } else this.updateTodo(el.value)
  }
  createTodo(el: any) {
    const create: Todo = Object.assign({}, el, { date_create: new Date(), date_update: new Date() })
    this._todoFacade.createTodo(create)
  }
  updateTodo(el: any) {
    const update: Todo = Object.assign({}, el, { date_update: new Date() })
    this._todoFacade.updateTodo(update)
  }
  deleteTodo(id: string) {
    this._todoFacade.deleteTodo(id)
  }

}
