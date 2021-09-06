import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
  @Input() public unicorn: Unicorn | undefined;

  public isInCart$: Observable<boolean> | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (this.unicorn) {
      this.isInCart$ = this.cartService.isInCart(this.unicorn);
    }
  }

  public toggleToCart(unicorn: Unicorn): void {
    this.cartService.toggleToCart(unicorn);
  }
}
