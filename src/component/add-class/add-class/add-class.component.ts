import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CourseslistService } from '../../../service/Courses/courseslist.service';
// import { Course } from '../../../classes/Course';

@Component({
  selector: 'app-add-class',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-class.component.html',
  styleUrl: './add-class.component.css'
})
export class AddClassComponent {
form:FormGroup<any>
  
  
constructor(private fb:FormBuilder)
{
  this.form = this.fb.group({
   course: this.fb.array([])
  });

}
get course() {
  var t =  this.form.get('course') as FormArray;
  return t;
}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}
addClass() {
  var t = this.course;
  this.course.push(this.fb.group({
    nameCourse: ['', Validators.required ,Validators.minLength(2)],
    subbject: ['', Validators.required]
  }));
  
}
onSubmit() {
  console.log(this.form.value);
//   this.form.value.forEach(elemen => {
//     CourseslistService.post(new Course(element.nameCourse,element.subbject))

// });
}

}

