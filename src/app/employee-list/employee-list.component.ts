import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { IEmployee } from '../IEmployee';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  emp!:IEmployee;
  constructor(public dataService:DataService, public authService:AuthService){}
  
  ngOnInit(){
    // //2. equivalent to send in postman
    // const send = this.dataService.getAll();

    // //3. listen
    // send.subscribe(( data : any ) => {
    //     this.dataService.employee.data = data;
    //     // console.log( "inside subscribe" );
    //     // console.log( data );
    // },
    // ( error ) => {
    //   console.log( error );
    // })

    //equivalent to above two steps

    // this.dataService.getAll().subscribe(( data : any ) => {
    //     this.dataService.employee.data = data;
    //     // console.log( "inside subscribe" );
    //     // console.log( data );
    // },
    // ( error ) => {
    //   console.log( error );
    // })

    // better way is : 

    this.dataService.getAll().subscribe({
        next : 
        ( data : any ) => { 
          this.dataService.employee.data = data;
        },
        error : 
        ( error ) => {
          console.log( error );
        }
    })
  }

  findAll(){
    console.log(this.dataService.employee.findAll());
  }

  onView(id:number){
    // let emp = this.dataService.employee.findOne(id);
    this.dataService.getOne(id).subscribe({
      next : 
      ( data : any ) => { 
        this.emp = data;

        alert(
          `
            ID:${this.emp?.id}
            First Name:${this.emp?.firstName}
            Last Name:${this.emp?.lastName}
            salary:${this.emp?.salary}
            
          `
        );

      },
      error : 
      ( error ) => {
        alert("something went wrong while fetching employee details!");
      }
    })
  }


  addEmp(){

    // this.dataService.employee.insert(
    //   {
    //     id: this.dataService.employee.data.length,
    //     firstName: "NEW",
    //     lastName: "new",
    //     salary: 10000
    //   }
    // );

    this.dataService.postOne({
         firstName: "NEW",
         lastName: "new",
         salary: 10000
    }).subscribe({
      next : 
      ( data : any ) => { 
        this.dataService.employee.insert(data);
        console.log(data);
      },
      error : 
      ( error ) => {
        alert("something went wrong while adding employee details!");
      }
    })

  }


  onUpdate(emp:IEmployee){
     
    this.dataService.selectedId = emp.id;
    // this.dataService.updateOne(emp.id,{
    //   id: emp.id,
    //   firstName: "Update",
    //   lastName: "update",
    //   salary: Math.floor(Math.random()*100)*1000
    //   }).subscribe({
    //   next:(data) => {this.dataService.employee.update(
    //     {
    //       id: emp.id,
    //       firstName: "Update",
    //       lastName: "update",
    //       salary: Math.floor(Math.random()*100)*1000
    //     }
    //   );},
    //   error:(err) => { console.log("Something went wrong while updfateing the employee!") }
    // })
  }

  onDelete(id:number){ 
    let agree = confirm("Do you want to delete the employee?")

    if(agree){
      this.dataService.deleteOne(id).subscribe({
        next : ( data : any ) => 
        {
          alert("you have successfully deleted the employee!"); 
          this.dataService.employee.delete(id);
        },
        error : 
        ( error ) => {
          alert("something went wrong while deleting employee details!");
        }
      })
    }
    
  }
  

}
