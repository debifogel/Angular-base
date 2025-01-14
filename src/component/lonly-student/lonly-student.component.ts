import { Component, Output,Input,EventEmitter } from '@angular/core';
import { Student } from '../../classes/student';


@Component({
  selector: 'app-lonly-student',
  standalone: true,
  imports: [],
  templateUrl: './lonly-student.component.html',
  styleUrl: './lonly-student.component.css'
})
export class LonlyStudentComponent {
  @Input()
  studentAlone!: Student;
  @Output()
  onSaveDetails: EventEmitter<any> = new EventEmitter<any>();
  Savedetails(name1:string,last:string,adress:string)
  { 
    if(this.studentAlone.name!="") 
    {
      this.studentAlone.name=name1
      this.studentAlone.lastname=last
      this.studentAlone.adress=adress
    }
    else{
    this.studentAlone=new Student(name1,last,adress)
    this.studentAlone._id=0
    }
    this.onSaveDetails.emit(this.studentAlone);
  }
}
