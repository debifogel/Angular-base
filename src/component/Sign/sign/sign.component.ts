import { Component } from '@angular/core';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  toSign(name:string,pass:string)
  {
    localStorage.setItem("sign","true")
  }
}
