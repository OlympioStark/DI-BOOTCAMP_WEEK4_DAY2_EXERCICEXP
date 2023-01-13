import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  Products = [
    {
      name: 'Banane',
      price: 150
     },

     {
      name: 'Frites',
      price: 500
     },

     {
      name: 'Pomme',
      price: 300
     },

     {
      name: 'Ananas',
      price: 250
     },

     {
      name: 'Alloco',
      price: 1000
     },
]

productColor(price:number){

    if(price > 300){

      return 'highlightDirective'
    }
    return 'color'
}

}
