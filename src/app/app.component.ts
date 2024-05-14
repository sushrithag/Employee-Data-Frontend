import { Component } from '@angular/core';
import { Employee } from './Employee';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';
  
  // data:IEmployee[] = [
  //   {id:1, firstName:"AAA", lastName:"aaa",salary:10000},
  //   {id:1, firstName:"BBB", lastName:"bbb",salary:20000},
  //   {id:1, firstName:"CCC", lastName:"ccc",salary:30000}
  // ]

  // employee:Employee = new Employee();

  constructor(public dataService: DataService,public authService:AuthService) {}

}
