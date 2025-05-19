import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {			// El tipo de dato a retornar debe ser Observable y se recomienda sea de tipo <any>.
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  } 
}
