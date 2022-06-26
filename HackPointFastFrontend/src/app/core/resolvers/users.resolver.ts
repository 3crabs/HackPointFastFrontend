import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserResponse} from "../models/UserModels";
import {Observable} from "rxjs";
import {UsersService} from "../services/users.service";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UsersResolver implements Resolve<UserResponse[]> {
  constructor(private usersService: UsersService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserResponse[]> {
    return this.usersService.getUsers();
  }
}
