import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = 'admin'
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/userprofile'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}



