// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder} from '@angular/forms'
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
public loginForm!:FormGroup;
constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){
}
  ngOnInit(): void {
   this.loginForm=this.formBuilder.group({
    email:[''],
    password:['']
   })
  }

  loginform(){
this.http.get<any>("http://localhost:3000/signUpUsers").subscribe((res)=>{
  const users=res.find((a:any)=>{
    return a.email==this.loginForm.value.email && a.password==this.loginForm.value.password
  });
  if(users){
    alert("Login Successfull");
    this.loginForm.reset();
    this.router.navigate(['home/Home']);
  }else{
    alert("Invalid Email or Password");
  }
},err=>{
  alert("something went wrong!");
})
  }
}