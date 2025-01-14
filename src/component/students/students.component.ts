import { Component } from '@angular/core';
import { Student } from '../../classes/student';
import { LonlyStudentComponent } from '../lonly-student/lonly-student.component';
import { InformationPopUpComponent } from "../information-pop-up/information-pop-up.component";
import { NgTemplateOutlet } from '@angular/common';
import { ListCoursesComponent } from "../list-courses/list-courses.component";
import { TextToIconPipe } from '../../pipes/textToIcon/text-to-icon.pipe';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [LonlyStudentComponent, InformationPopUpComponent, NgTemplateOutlet, ListCoursesComponent,TextToIconPipe,
    ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  //@ViewChild(InformationPopUpComponent) popup!: InformationPopUpComponent;
  studenttoconponent!:Student;
  maker!: boolean;
  newer!: boolean; 
  _idstudennt?:number
  deletestudent=false
  showCourse=false
  studentpaid=false
  
  toMake(student:Student)
  {
   this.maker=true;
   this.newer=false;
   this.studenttoconponent=student
  }
  toInsert()
  {
    this.maker=false;
    this.newer=true;
    this.studenttoconponent=new Student("",'',"")
  }
  
  toDelete(_id:number)
  {    
    this.deletestudent=true
    this._idstudennt=_id
    //this.popup.Topopup("האם אתה בטוח שברצונך למחוק תלמיד זה?",id)
  }
  deleteStudent()
  {
    this.list.splice(this.list.findIndex((value: Student)=>value._id==this._idstudennt),1)

    this.deletestudent=false

  }
  notDeleteStudent()
  {
    this.deletestudent=false
  }
  saveStudentToList(_event:Student)
  {
    if(_event._id==0)
       this.list.push(_event)
    else
      this.list.map(item=>{if(item._id==_event._id)
    {item.name=_event.name
      item.adress=_event.adress
      item.lastname=_event.lastname
    }})
    
    this.newer=false;
    this.maker=false;

  }
  Showcourses(item:Student)
  {
    this.showCourse=true
    this.studentpaid=item.isPaid
  }
  NoShowcourses()
  {
    this.showCourse=false
  }
   list:Student[]=[
    new Student("dvory",'fogel',"minz"),
    new Student("debi",'zax',"minz"),
    new Student("dvora",'noar',"minz"),
    new Student("debush",'choen',"sher"),
   ]
   
}
