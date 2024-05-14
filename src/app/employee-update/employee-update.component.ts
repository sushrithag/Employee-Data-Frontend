import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {
  
  constructor(private dataService:DataService, private activeRoute:ActivatedRoute, private router:Router){}

  myForm!:FormGroup;

  ngOnInit(){
    let id = this.activeRoute.snapshot.params['id'];
    let employee:IEmployee | null = this.dataService.employee.findOne(id);
    if(employee)
    this.myForm = new FormGroup({
      'id' : new FormControl(employee.id),
      'firstName' : new FormControl(employee.firstName,[Validators.required,Validators.minLength(4)]),
      'lastName' : new FormControl(employee.lastName,[Validators.required,Validators.minLength(4)]),
      'salary' : new FormControl(employee.salary,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.myForm.value)
    // this.myForm.patchValue({
    //   id:this.activeRoute.snapshot.params['id']
    // })
    this.dataService.updateOne(this.myForm.value.id, this.myForm.value).subscribe({
      next:(data:any) => {
        this.dataService.employee.update(data);
        this.router.navigate(["/employees"]);
      },
      error:(err) => { console.log("Something went wrong while updfateing the employee!") }
    })
  }

}
