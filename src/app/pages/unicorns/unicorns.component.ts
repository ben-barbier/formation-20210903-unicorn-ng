import { Component } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.scss'],
})
export class UnicornsComponent {
  public unicorns: Unicorn[] = [];

  constructor(private unicornsService: UnicornsService) {
    this.unicornsService.getAllMore20Kg().subscribe((unicorns) => (this.unicorns = unicorns));
  }

  updateUnicorn(unicorn: Unicorn) {
    this.unicorns = this.unicorns.map((u) => (u.id === unicorn.id ? unicorn : u));
  }
}
