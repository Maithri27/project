import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';


@Component({
  selector: 'app-prof-search-student',
  templateUrl: './prof-search-student.component.html',
  styleUrls: ['./prof-search-student.component.css']
})
export class ProfSearchStudentComponent implements OnInit {
  Msg?:string;
  constructor(public professorService:ProfessorService) { }

  ngOnInit(): void {
  }

  findStudent(getStudentRef:any){
   console.log(getStudentRef)
    this.professorService.findStudent(getStudentRef).subscribe(result=>{
      console.log(result)
      if(result?.length>0){
        console.log(result[0]._id)
  this.Msg="id is "+result[0]._id+" Student Name "+result[0].sname+" Email "+result[0].email+" Contact "+result[0].contact;
      }else {
        console.log("no")
  this.Msg="Student is not present";
      }
    

    })
  }
}



