import { Component } from '@angular/core';
import { EventesApiService } from '../../../service/EventApi/eventes-api.service';
import {  AsyncPipe } from '@angular/common';
import { MyEvent } from '../../../classes/Event';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [ AsyncPipe],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  constructor(public eventService: EventesApiService){}
  
 
  
  addEvent=false
  
  addNewEvent(title:string ,date:string)
  {
    this.eventService.addEvent(new MyEvent(title,new Date(date)))
    this.addEvent=false
  }

}
