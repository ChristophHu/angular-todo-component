import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { generateRandomGuid } from "src/app/shared/utils";
import { Todo } from './models/todo.model'

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todo = [
        { id: 'd5a75974-c089-c571-952f-697ccaa34239', value: 'Work', complete: true, date_create: new Date(), date_update: new Date() },
        { id: '750a7bde-f558-c566-8fe2-e73c691d8783', value: 'Private', complete: false, date_create: new Date(), date_update: new Date() }
    ]

    create(item: any, reducer_func: string): Observable<string> {
        return new Observable ((observer) => {
            const source$ = of(Object.assign({}, item, { id: generateRandomGuid() })) // this.reducer(reducer_func, kat)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            }), (error: any) => observer.error(error)
        })
    }
    read(reducer_func: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = of(this.todo) // this.getReducer(reducer_func, {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    update(kat: any, reducer_func: string): Observable<number> {
        return new Observable ((observer) => {
            const source$ = of(200) // this.reducer(reducer_func, kat)
            source$.subscribe((status: any) => {
                observer.next(status)
            }),
            (error: any) => observer.error(error)
        })
    }
    delete(id: string, reducer_func: string): Observable<number> {
        return new Observable ((observer) => {
            const source$ = of(200) // this.reducer(reducer_func, id)
            source$.subscribe((status: any) => {
                observer.next(status)
            }), (error: any) => observer.error(error)
        })
    }

    createTodo(insert: Todo): Observable<string> {
        console.log(insert)
        return this.create(insert, 'insertTodo')
    }
    readTodos(): Observable<any> {
        return this.read('getTodos')
    }
    updateTodo(update: Todo): Observable<number> {
        return this.update(update, 'updateTodo')
    }
    deleteTodo(id: string): Observable<number> {
        return this.delete(id, 'deleteTodo')
    }
}