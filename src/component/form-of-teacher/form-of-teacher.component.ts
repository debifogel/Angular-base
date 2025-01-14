import { Component, Input } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { TeacherListService } from '../../service/TeacherList/teacher-list.service';
import { Teacher } from '../../classes/Teacher';
@Component({
  selector: 'app-form-of-teacher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-of-teacher.component.html',
  styleUrl: './form-of-teacher.component.css'
})
export class FormOfTeacherComponent{
  //problem in input
  @Input() teacher?:Teacher  
  teacherToForm: Teacher= new Teacher(0, "", []);
  after(){
    if(this.teacher) 
  this.teacherToForm=this.teacher 
    }
  onSubmit() {
    console.log()
    if(this.teacher)
       TeacherListService.update(this.teacherToForm._Id,this.teacherToForm)
    else
    TeacherListService.add(this.teacherToForm)
  }
  
  
}
