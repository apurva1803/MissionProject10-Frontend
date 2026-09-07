import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { TimetableComponent } from './timetable/timetable.component';
import { StudentComponent } from './student/student.component';
import { CollegeListComponent } from './college/collegelist.component';
import { CourseListComponent } from './course/courselist.component';
import { FacultyListComponent } from './faculty/facultylist.component';
import { MarksheetListComponent } from './marksheet/marksheetlist.component';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { RoleListComponent } from './role/rolelist.component';
import { StudentListComponent } from './student/studentlist.component';
import { SubjectListComponent } from './subject/subjectlist.component';
import { TimetableListComponent } from './timetable/timetablelist.component';
import { UserListComponent } from './user/userlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { HotellistComponent } from './hotel/hotellist.component';
import { HotelComponent } from './hotel/hotel.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },

  {
    path: 'college/:id',
    component: CollegeComponent
  },
  
  {
    path: 'collegelist',
    component: CollegeListComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'student',
    component: StudentComponent
  }, {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'courselist',
    component: CourseListComponent
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent
  },
  {
    path: 'facultylist',
    component: FacultyListComponent
  },
  {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },
  {
    path: 'marksheetlist',
    component: MarksheetListComponent
  },
  {
    path: 'marksheetmeritlist',
    component: MarksheetmeritlistComponent
  },
  {
    path: 'getmarksheet',
    component: GetmarksheetComponent
  },
  {
    path: 'role/:id',
    component: RoleComponent
  },
  {
    path: 'rolelist',
    component: RoleListComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'studentlist',
    component: StudentListComponent
  },
  {
    path: 'subject/:id',
    component: SubjectComponent
  },
  {
    path: 'subjectlist',
    component: SubjectListComponent
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent
  },
  {
    path: 'timetablelist',
    component: TimetableListComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
  {
    path: 'myprofile/:id',
    component: MyprofileComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'hotel',
    component: HotelComponent
  },

  {
    path: 'hotel/:id',
    component: HotelComponent
  },
  
  {
    path: 'hotellist',
    component: HotellistComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
