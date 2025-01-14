import { Injectable } from '@angular/core';
import { Course, Subbject } from '../../classes/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseslistService {

  constructor() { }
  static  courses = [
    new Course("shufra",Subbject.QA,500,["קוגל","ita"]),
    new Course("wolf",Subbject.QA,500,["קוגל","ita"]),
    new Course("yashan",Subbject.QA,5000,["קוגל","ita"]),
    new Course("kodesh",Subbject.QA,500,["קוגל","yafi"])

    ];
    static getCourses() {
    return CourseslistService.courses;
    }
    static getCourseById(id: number) {
    return CourseslistService.courses.find(course => course.idCourse === id);
    }
    static post(c:Course)
    {
      this.courses.push(c)
    }
}
