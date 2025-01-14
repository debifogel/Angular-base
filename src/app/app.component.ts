import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';
import { EventListComponent } from '../component/evenets/event-list/event-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,EventListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'first-project';
  
}


