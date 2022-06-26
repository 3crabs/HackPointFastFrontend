import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {RefereeLoginRequest, SuccessResponse} from "../../core/models/AuthModels";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginRequest = new RefereeLoginRequest();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.authService.login(this.loginRequest).subscribe((res: SuccessResponse) => {
      this.router.navigateByUrl('/settings');
    }, error => {
      alert('Что то пошло не так!')
    })
  }
}
