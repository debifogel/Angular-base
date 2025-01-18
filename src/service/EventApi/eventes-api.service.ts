import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyEvent } from '../../classes/Event';
@Injectable({
  providedIn: 'root'
  
})

export class EventesApiService  {
  private url="https://eventsapi.onrender.com/api/Events"
   eventes$?: Observable<MyEvent[]>;

  constructor(private server: HttpClient) {
    this.loadEventes();
  }

  private loadEventes(): void {
    this.eventes$ = this.server.get<MyEvent[]>(this.url);
  }
  //  getEventes(): Observable<MyEvent[]> {
  //   return this.eventes$;
  // }

  addEvent(e: MyEvent): Observable<MyEvent> {
    return this.server.post<MyEvent>(this.url, e);
  }
   deleteEvent(id: number): Observable<void> {
    return this.server.delete<void>(`${this.url}/${id}`)}
}
