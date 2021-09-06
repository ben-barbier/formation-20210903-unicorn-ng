import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart$ = new BehaviorSubject<Unicorn[]>([]);

  public toggleToCart(unicorn: Unicorn): void {
    const isInCart = this.cart$.getValue().some((u) => u.id === unicorn.id);
    if (isInCart) {
      this.cart$.next(this.cart$.getValue().filter((u) => u.id !== unicorn.id));
    } else {
      this.cart$.next([...this.cart$.getValue(), unicorn]);
    }
  }

  public isInCart(unicorn: Unicorn): Observable<boolean> {
    return this.cart$.pipe(map((cart) => cart.some((u) => u.id === unicorn.id)));
  }
}
