import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>(`${environment.apiURL}/unicorns`);
  }

  public get(id: number): Observable<Unicorn> {
    return this.http.get<Unicorn>(`${environment.apiURL}/unicorns/${id}`);
  }

  public delete(unicorn: Unicorn): Observable<void> {
    return this.http.delete<void>(`${environment.apiURL}/unicorns/${unicorn.id}`);
  }

  public add(unicorn: Omit<Unicorn, 'id'>): Observable<void> {
    return this.http.post<void>(`${environment.apiURL}/unicorns`, unicorn);
  }

  public update(unicorn: Unicorn): Observable<void> {
    return this.http.put<void>(`${environment.apiURL}/unicorns/${unicorn.id}`, unicorn);
  }

  // TODO: voir les opérateurs avant
  // public exists(id: number): Observable<boolean> {
  //   return this.http.head<void>(`${environment.apiURL}/unicorns/${unicorn.id}`, unicorn);
  // }
}
