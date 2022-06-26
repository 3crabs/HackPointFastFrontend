import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { SettingsComponent } from './components/settings/settings.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ApiInterceptor } from "./core/interceptors/api.interceptor";
import { MatTableModule } from "@angular/material/table";
import { CriterionSettingsComponent } from './components/settings/criterion-settings/criterion-settings.component';
import { MatDialogModule } from "@angular/material/dialog";
import { TeamsComponent } from './components/teams/teams.component';
import { TeamSettingsComponent } from './components/teams/team-settings/team-settings.component';
import { UsersComponent } from "./components/users/users.component";
import { UserSettingsComponent } from "./components/users/user-settings/user-settings.component";
import { UsersNewComponent } from './components/users-new/users-new.component';
import {CookieService} from "ngx-cookie-service";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SettingsComponent,
    LeftMenuComponent,
    CriterionSettingsComponent,
    UserSettingsComponent,
    TeamsComponent,
    TeamSettingsComponent,
    UsersComponent,
    UsersNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    TableModule,
    CheckboxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
