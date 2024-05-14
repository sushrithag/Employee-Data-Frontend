import { Component, Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../IEmployee';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent {

  constructor(public dataService:DataService, private activeRoute:ActivatedRoute, private router:Router){}
  
  myForm!:FormGroup;
  
  ngOnInit(){
    let id = this.activeRoute.snapshot.params['id'];
    let employee:IEmployee | null = this.dataService.employee.findOne(id);
    if(employee)
    this.myForm = new FormGroup({
      'id' : new FormControl(employee.id),
      'firstName' : new FormControl(employee.firstName),
      'lastName' : new FormControl(employee.lastName),
      'salary' : new FormControl(employee.salary)
    })
  }
  
  onView(id:number){
    return this.dataService.employee.findOne(id);
  }
}
