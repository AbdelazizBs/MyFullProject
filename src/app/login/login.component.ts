import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username: any;
 password: any;
 invalidLogin = false;
 
 successMessage = "Authentication success";
 errorMessage = "Invalide username or password";
 constructor(private router: Router,public loginservice: AuthenticationService) { }
 ngOnInit() {
 }
 checkLogin() {
  if (this.loginservice.authenticate(this.username, this.password)==true) {
    this.router.navigate([''])
    } else
    this.invalidLogin = true
    }
    
   }