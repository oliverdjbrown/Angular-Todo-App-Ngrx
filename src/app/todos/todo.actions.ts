import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[TODO] Create Todo', props<{text: string}>());
export const editTodo = createAction('[TODO] Edit Todo', props<{id: number, text: string}>());
export const deleteTodo = createAction('[TODO] Edit Todo', props<{id: number}>());
export const toggleTodo = createAction('[TODO] Toggle Todo', props<{id: number}>());