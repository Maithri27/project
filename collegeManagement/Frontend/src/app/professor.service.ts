import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from './model.professor';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(public http:HttpClient) { }
/*
  login(productRef:any):any{
    return this.http.put("http://localhost:9090/class/deleteById/",{responseType:'text'});
}
*/

addStudent(addStudentRef:any):any{
  this.http.post("http://localhost:9090/college/storeStudentDetails",addStudentRef,{responseType:'text'}).
  subscribe(result=>console.log(result),error=>console.log(error));
}

findStudent(getStudentRef:any):Observable<Professor[]>{
  return this.http.get<Professor[]>("http://localhost:9090/college/getStudentById/"+getStudentRef)}
}