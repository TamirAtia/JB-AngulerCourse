import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
// import {DataService} from '../services/data.service'

@Injectable({
  providedIn: 'root',
})
export class EditListGuard implements CanActivate {
  constructor(
    // private data: DataService,
    private router: Router
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<true | UrlTree> {
    let idNum = +(route.paramMap.get('id') ?? -1);
    if (idNum >= -1) {
      return true;
    }

    return this.router.parseUrl('lists/-1/edit');
  }
}
