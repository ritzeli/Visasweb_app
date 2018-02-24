import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as _ from 'lodash';
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private user_service: UserService,
              private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.user_service.user
      .take(1)
      .map(user => _.has(_.get(user, 'roles'), 'subscriber'))
      .do(res => {
        if (!res) {
          this.router.navigate(['/login']).then();
        }
      });
  }
}
// todo hacer los otros 2 guard de permisos.
