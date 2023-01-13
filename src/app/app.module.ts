import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { BoldDirectiveDirective } from './bold-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProductlistComponent,
    BoldDirectiveDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: [
    BoldDirectiveDirective
  ]
})
export class AppModule { }
