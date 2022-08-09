import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "./state/filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

interface AppState {
    todos: Todo[]
    filter: string
}

const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};

export {AppState, appReducers};