import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent {
title="hello for you ";
timeNow()
{
  let now=new Date()
  console.log(now.getHours()) 
  if(now.getHours()<12&&now.getHours()>0)
       return "good morning"
  if(now.getHours()<18)
    return "good afternoon"    
  return "good evening"
}
}
