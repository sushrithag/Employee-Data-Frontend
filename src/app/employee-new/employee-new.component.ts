import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent {

  constructor(private dataService:DataService, private router:Router){}
  
  onSubmit(f:NgForm){
    console.log(f.value);

    this.dataService.postOne(f.value).subscribe({
        next : 
        ( data : any ) => { 
          this.dataService.employee.insert(data);
          f.reset();
          this.router.navigate(["/employees"]);
          // console.log(data);
        },
        error : 
        ( error ) => {
          alert("something went wrong while adding employee details!");
        }
      })
  }
}
