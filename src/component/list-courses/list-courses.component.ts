import { Component, Input } from '@angular/core';
import { Course } from '../../classes/Course';
import { ColorFullDirective } from '../../directive/color-full.directive';
import { CourseslistService } from '../../service/Courses/courseslist.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [ColorFullDirective, CommonModule, NgClass],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent 
{
  courses: Course[] = [];
  selectedOptions: number[] = [];
  @Input()
  paid!:boolean
  ngOnInit() {
  this.courses=CourseslistService.getCourses()
  }
  isSelected(id: number): boolean {
    return this.selectedOptions.includes(id);
  }
  isExpensive(cost:number):boolean{
    console.log(cost) 
    return cost>50 }
  
  toggleSelection(id: number): void {
    if (this.selectedOptions.includes(id)) {
      this.selectedOptions = this.selectedOptions.filter(option => option !== id);
    } else {
      this.selectedOptions.push(id);
    }
  }
}
