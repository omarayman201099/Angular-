
import { Component } from '@angular/core';
import { Product } from '../interface/interface';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [],
  templateUrl: './recomend-product.component.html',
  styleUrl: './recomend-product.component.css'
})
export class RecccomenedProductComponent {

  list:Product[]=[
    { image :'../../assets/New folder/poert1.png'},
    { image :'../../assets/New folder/port2.png'},
    { image :'../../assets/New folder/port3.png'},


  ]

}
