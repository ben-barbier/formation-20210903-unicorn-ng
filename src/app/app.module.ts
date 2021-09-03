import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornsComponent } from './pages/unicorns/unicorns.component';
import { UnicornCardComponent } from './pages/unicorns/unicorn-card/unicorn-card.component';

@NgModule({
  declarations: [AppComponent, UnicornsComponent, UnicornCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
