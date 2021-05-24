import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';

@Component({
  selector: 'app-prof-add-new-student',
  templateUrl: './prof-add-new-student.component.html',
  styleUrls: ['./prof-add-new-student.component.css']
})
export class ProfAddNewStudentComponent implements OnInit {
  Msg?:string;
  constructor(public professorService:ProfessorService) { }

  ngOnInit(): void {
  }

  storeStudent(addStudentRef:any){
    console.log(addStudentRef)
    this.professorService.addStudent(addStudentRef)
  }

}
