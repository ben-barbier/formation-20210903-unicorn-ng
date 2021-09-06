import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornsComponent } from './pages/unicorns/unicorns.component';

const routes: Routes = [
  { path: '', component: UnicornsComponent },
  { path: 'unicorn/:id', component: UnicornDetailsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
