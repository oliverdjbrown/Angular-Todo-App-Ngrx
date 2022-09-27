import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Routes } from 'src/app/core/enums/routes';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpService) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${Routes.todos}`).pipe(
      map((data: Todo[]) => ({
        ...data
          .map((todo: any) => ({
            id: todo.id,
            text: todo.title,
            completed: todo.completed,
          }))
          .slice(0, 10),
      }))
    );
  }
}
