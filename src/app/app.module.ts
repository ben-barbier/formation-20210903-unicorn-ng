import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { MaterialModule } from './material.module';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornCardComponent } from './pages/unicorns/unicorn-card/unicorn-card.component';
import { UnicornEditComponent } from './pages/unicorns/unicorn-card/unicorn-edit/unicorn-edit.component';
import { UnicornsComponent } from './pages/unicorns/unicorns.component';

@NgModule({
  declarations: [AppComponent, UnicornsComponent, UnicornCardComponent, NavComponent, UnicornDetailsComponent, UnicornEditComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, LayoutModule, ReactiveFormsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
