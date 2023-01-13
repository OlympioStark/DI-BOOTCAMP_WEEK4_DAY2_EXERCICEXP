import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'productlist', component: ProductlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
