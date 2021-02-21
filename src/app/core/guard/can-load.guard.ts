import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/CartModule/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(
    private cartService: CartService,
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let res: boolean = false;

    if (route.path === 'order') {
      res = !this.cartService.isEmptyCart();
    }

    return res;
  }
}
