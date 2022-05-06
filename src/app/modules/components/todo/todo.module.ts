import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoService } from './todo.service';
import { TodoComponent } from './component/todo.component';
import { TodoEffects } from './store/effects';
import { TodoReducer } from './store/reducer'
import { TodoFacade } from './todo.facade';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forFeature('todo-component', TodoReducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  exports: [
    TodoComponent
  ],
  providers: [
    TodoService,
    TodoFacade
  ]
})
export class TodoModule { }
