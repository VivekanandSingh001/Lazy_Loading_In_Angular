import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  loginBool = false;
  loginBool1 = false;
  myBooleanVariable: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.loginBool))
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  loginform() {
    this.http.get<any>("http://localhost:3000/signUpUsers").subscribe((res) => {
      const users = res.find((a: any) => {
          if (a.email == this.loginForm.value.email && a.password == this.loginForm.value.password) {
          this.loginBool = true;
        }
        return a.email == this.loginForm.value.email && a.password == this.loginForm.value.password
      });
      if (users) {
        console.log("loginBool", this.loginBool);
        localStorage.setItem('isLoggedIn', JSON.stringify(this.loginBool))
        localStorage.setItem('Role', JSON.stringify(users.role))
        alert("Login Successfull");
        this.loginForm.reset();
          this.router.navigate(['home/Home']);
      } else {
        alert("Invalid Email or Password");
      }
    }, err => {
      alert("something went wrong!");
    })
  }
  goToHome() {
    console.log(this.loginForm,"uguedbwjwbjwj")
 let see1=this.authService.isUserLoggedIn();
 if(see1==true){
  this.router.navigate(['home/Home'])
 }
     }
}

