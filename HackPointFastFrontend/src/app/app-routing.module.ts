import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {TeamsComponent} from "./components/teams/teams.component";
import {UsersComponent} from "./components/users/users.component";
import {UsersNewComponent} from "./components/users-new/users-new.component";
import {UsersResolver} from "./core/resolvers/users.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teams',
    component: TeamsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users-new',
    component: UsersNewComponent,
    canActivate: [AuthGuard],
    resolve: {
      users: UsersResolver,
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
