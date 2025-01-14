import { Component, Input } from '@angular/core';
import { Course } from '../../classes/Course';
import { ColorFullDirective } from '../../directive/color-full.directive';
import { CourseslistService } from '../../service/Courses/courseslist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [ColorFullDirective,CommonModule],
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

  toggleSelection(id: number): void {
    if (this.selectedOptions.includes(id)) {
      this.selectedOptions = this.selectedOptions.filter(option => option !== id);
    } else {
      this.selectedOptions.push(id);
    }
  }
}
