import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';

@Component({
  selector: 'app-prof-login',
  templateUrl: './prof-login.component.html',
  styleUrls: ['./prof-login.component.css']
})
export class ProfLoginComponent implements OnInit {
  Msg?:string;
  constructor(public professorService:ProfessorService) {}

  ngOnInit(): void {
  }
/*
  loginPage(loginRef:any){
    this.professorService.login(loginRef).subscribe((result:string)=> {
      this.Msg=result;
    });
  }
  */
}
