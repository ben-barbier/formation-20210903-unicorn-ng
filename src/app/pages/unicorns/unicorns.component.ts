import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@UntilDestroy()
@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.scss'],
})
export class UnicornsComponent {
  public unicorns: Unicorn[] = [];
  public trackById = (idx: number, item: Unicorn) => item.id;

  constructor(private unicornsService: UnicornsService) {
    this.unicornsService
      .getAllMore20Kg()
      .pipe(untilDestroyed(this))
      .subscribe((unicorns) => (this.unicorns = unicorns));
  }

  updateUnicorn(unicorn: Unicorn) {
    this.unicorns = this.unicorns.map((u) => (u.id === unicorn.id ? unicorn : u));
  }
}
