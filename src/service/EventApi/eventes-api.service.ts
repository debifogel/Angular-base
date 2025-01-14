import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyEvent } from '../../classes/Event';
@Injectable({
  providedIn: 'root'
})

export class EventesApiService {
  private url="https://localhost:7226/api/Events"
  eventes$!: Observable<MyEvent[]>;
  constructor(private server: HttpClient) {
    
    
   }
   ngOnInit(){this.server.get<MyEvent[]>(this.url).subscribe(data=>{this.eventes$=of(data)})}
   getEventes(){}
   addEvent(e:MyEvent){this.server.post(this.url,e)}
   deleteEvent(id:number){this.server.delete(this.url+"/"+JSON.stringify(id))}
}
