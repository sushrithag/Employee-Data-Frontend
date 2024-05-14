import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { LoginGuard } from './gaurds/login.guard';
import { AdminGuard } from './gaurds/admin.guard';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'employees', component:EmployeeListComponent,canActivate:[LoginGuard], canActivateChild:[AdminGuard],
    children:[{path:'add',component:EmployeeNewComponent},
              {path:'update/:id',component:EmployeeUpdateComponent},
              {path:'view/:id', component:EmployeeDetailComponent}
            ]
  },
  {path:'about', canActivate:[LoginGuard], loadChildren:() => import('./lazy/lazy.module').then(m => m.LazyModule)},
  {path:'**', component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
