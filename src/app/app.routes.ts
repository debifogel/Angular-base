import { Routes } from '@angular/router';
import { StudentsComponent } from '../component/students/students.component';
import { FormOfTeacherComponent } from '../component/form-of-teacher/form-of-teacher.component';
import { AddClassComponent } from '../component/add-class/add-class/add-class.component';
import { ListCoursesComponent } from '../component/list-courses/list-courses.component';
import { LonlyStudentComponent } from '../component/lonly-student/lonly-student.component';
import { TreeCoursesComponent } from '../component/TreeCourse/tree-courses/tree-courses.component';

export const routes: Routes = [
    { path: "students", component:StudentsComponent  },
    { path: "add teacher", component: FormOfTeacherComponent },
    { path: "add course", component:AddClassComponent  },
    { path: "pupil courses", component:ListCoursesComponent  },
    { path: "one student", component:LonlyStudentComponent  },
    { path: "the courses", component:TreeCoursesComponent  },
];
