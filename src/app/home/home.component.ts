import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  creds:any={
    email: '',
    password: ''
  }

  constructor(public authService:AuthService){}

  onSubmit(){
    // console.log(this.creds);
    this.authService.login(this.creds).subscribe({
      next:(data:any) => {
        // console.log(data['accessToken'])
        localStorage.setItem('token',data['accessToken']);
        localStorage.setItem('role',data['user']['role']);
      },
      error:(error) => {alert("Invalid Credentials!")}
    });
  }
}
