import { Routes } from '@angular/router';
import { StudentsComponent } from '../component/students/students.component';
import { FormOfTeacherComponent } from '../component/form-of-teacher/form-of-teacher.component';
import { AddClassComponent } from '../component/add-class/add-class/add-class.component';
import { ListCoursesComponent } from '../component/list-courses/list-courses.component';
import { LonlyStudentComponent } from '../component/lonly-student/lonly-student.component';
 import { TreeCoursesComponent } from '../component/TreeCourse/tree-courses/tree-courses.component';
import { EventListComponent } from '../component/evenets/event-list/event-list.component';
import { authGuard } from '../guard/auth guard/auth.guard';
import { SignComponent } from '../component/Sign/sign/sign.component';

export const routes: Routes = [
    { path: "students", component:StudentsComponent ,canActivate:[authGuard] },
    { path: "add teacher", component: FormOfTeacherComponent,canActivate:[authGuard] },
    { path: "add course", component:AddClassComponent ,canActivate:[authGuard] },
    { path: "pupil courses", component:ListCoursesComponent ,canActivate:[authGuard] },
    { path: "one student", component:LonlyStudentComponent,canActivate:[authGuard]  },
    { path: "the courses", component:TreeCoursesComponent ,canActivate:[authGuard] },
    { path: "the event", component:EventListComponent ,canActivate:[authGuard] },
    {path:"sign in",component:SignComponent}
];
