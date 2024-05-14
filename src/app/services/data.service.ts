import { Injectable } from '@angular/core';
import { Employee } from '../Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  employee:Employee = new Employee();
  selectedId!:number;
  userid!:number;

  constructor(private http:HttpClient) { }

  //equivalent to setting the url in postman
  getAll(){
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY4MzI4NTk3NCwiZXhwIjoxNjgzMjg5NTc0LCJzdWIiOiIxIn0.qoRdUUZRdszK43mHqhWdzoyAYBeWNQPfZKU3vqjjBPc";
    // const headers = new HttpHeaders().set("Authorization","Bearer "+token);
    // return this.http.get("http://localhost:3000/employee",{headers});
    return this.http.get("http://localhost:3000/employee");
  }

  getOne(id:number){
    return this.http.get("http://localhost:3000/employee/"+id);
  }

  postOne(body:any){
    return this.http.post("http://localhost:3000/employee/",body);
  }

  deleteOne(id:number){
    return this.http.delete("http://localhost:3000/employee/"+id);
  }

  updateOne(id:number,body:any){
    return this.http.put("http://localhost:3000/employee/"+id,body);
  }
}
