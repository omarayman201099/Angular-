import { Component } from '@angular/core';
import { Product } from '../interface/interface';
import { RecccomenedProductComponent } from '../recomend-product/recomend-product.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecccomenedProductComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  list:Product[]=[
    { image :'../../assets/New folder/poert1.png'},
    {image :'../../assets/New folder/port2.png'},
    { image :'../../assets/New folder/port3.png'},


  ]

}
