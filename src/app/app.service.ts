import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDtoInterface } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public UpdateSalary(dto: ApiDtoInterface): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`http://168.75.82.21:81/api/atualizar-salario`, JSON.stringify(dto), { headers })
  }
}
