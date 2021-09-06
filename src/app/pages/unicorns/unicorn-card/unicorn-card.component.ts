import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { UnicornsService } from '../../../shared/services/unicorns.service';
import { UnicornEditComponent } from './unicorn-edit/unicorn-edit.component';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnicornCardComponent implements OnInit, OnChanges {
  @Input() public unicorn: Unicorn | undefined;
  @Output() public updated = new EventEmitter<Unicorn>();

  public isInCart$: Observable<boolean> | undefined;
  public age = 0;

  constructor(private cartService: CartService, private dialog: MatDialog, private unicornsService: UnicornsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.unicorn) {
      this.age = new Date().getFullYear() - this.unicorn.birthyear;
    }
  }

  ngOnInit(): void {
    if (this.unicorn) {
      this.isInCart$ = this.cartService.isInCart(this.unicorn);
    }
  }

  public toggleToCart(unicorn: Unicorn): void {
    this.cartService.toggleToCart(unicorn);
  }

  public openEditDialog(unicorn: Unicorn): void {
    this.dialog
      .open(UnicornEditComponent, { data: { unicorn } })
      .afterClosed()
      .pipe(
        filter((updatedUnicorn) => !!updatedUnicorn),
        switchMap((updatedUnicorn) => this.unicornsService.update(updatedUnicorn).pipe(map(() => updatedUnicorn)))
      )
      .subscribe((updatedUnicorn) => this.updated.emit(updatedUnicorn));
  }
}
