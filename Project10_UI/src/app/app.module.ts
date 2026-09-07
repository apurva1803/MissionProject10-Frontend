import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { AuthServiceService } from './auth-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoleListComponent } from './role/rolelist.component';
import { UserListComponent} from './user/userlist.component';
import { SubjectListComponent } from './subject/subjectlist.component';
import { MarksheetListComponent } from './marksheet/marksheetlist.component';
import { CourseListComponent } from './course/courselist.component';
import { CollegeListComponent } from './college/collegelist.component';
import { FacultyListComponent } from './faculty/facultylist.component';
import { StudentListComponent } from './student/studentlist.component';
import { TimetableListComponent } from './timetable/timetablelist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotellistComponent } from './hotel/hotellist.component';


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    UserComponent,
    CollegeComponent,
    StudentComponent,
    MarksheetComponent,
    CourseComponent,
    SubjectComponent,
    TimetableComponent,
    FacultyComponent,
    NavbarComponent,
    FooterComponent,
    RoleListComponent,
    UserListComponent,
    TimetableListComponent,
    SubjectListComponent,
    StudentListComponent,
    MarksheetListComponent,
    CourseListComponent,
    CollegeListComponent,
    FacultyListComponent,
    FacultyListComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    MarksheetmeritlistComponent,
    GetmarksheetComponent,
    ChangepasswordComponent,
    MyprofileComponent,
    HotelComponent,
    HotellistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
   providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthServiceService,
      multi: true,
    },

    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
