import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfLoginComponent } from './prof-login/prof-login.component';
import { ProfSignupComponent } from './prof-signup/prof-signup.component';
import { ProfMainPageComponent } from './prof-main-page/prof-main-page.component';
import { ProfAddNewStudentComponent } from './prof-add-new-student/prof-add-new-student.component';
import { ProfSearchStudentComponent } from './prof-search-student/prof-search-student.component';
import { ProfPostGradeComponent } from './prof-post-grade/prof-post-grade.component';
import { ProfPostNotesComponent } from './prof-post-notes/prof-post-notes.component';
import { ProfPostAttendanceComponent } from './prof-post-attendance/prof-post-attendance.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfLoginComponent,
    ProfSignupComponent,
    ProfMainPageComponent,
    ProfAddNewStudentComponent,
    ProfSearchStudentComponent,
    ProfPostGradeComponent,
    ProfPostNotesComponent,
    ProfPostAttendanceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
