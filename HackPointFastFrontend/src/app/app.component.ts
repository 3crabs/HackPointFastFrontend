import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HackPointFastFrontend';

  constructor(private router: Router) {
  }

  get isLogin(){
    return !this.router.url.includes('/login');
  }
}
