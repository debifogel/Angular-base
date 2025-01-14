import { Injectable } from '@angular/core';
import { Teacher } from '../../classes/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherListService {

  constructor() { }
  static count=0
  static Teachers=[new Teacher(1,"dvory",["v1","v2"])
    ,new Teacher(2,"chani",["v1"]),
    new Teacher(3,"dvory",["v1"]),
    new Teacher(4,"lea",["v1"])
  ]
  static get(){TeacherListService.Teachers}
  static add(teacher:Teacher){teacher._Id=++this.count
    console.log(TeacherListService.Teachers)
    TeacherListService.Teachers.push(teacher)}
  static update(id:number,teacher:Teacher){
   let t= TeacherListService.Teachers.find(teacher=>teacher._Id==id)
   if(t)
  {t._classes=teacher._classes
    t._name=teacher._name
  }}
  static delete(id:number){
    let index= TeacherListService.Teachers.findIndex(teacher=>teacher._Id==id)
    if(index!=-1)
      TeacherListService.Teachers.splice(index, 1)
    }
}
