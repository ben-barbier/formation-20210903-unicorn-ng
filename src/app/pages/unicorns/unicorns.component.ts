import { Component } from '@angular/core';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.scss'],
})
export class UnicornsComponent {
  public unicorns$ = this.unicornsService.getAllMore20Kg();

  constructor(private unicornsService: UnicornsService) {}
}
