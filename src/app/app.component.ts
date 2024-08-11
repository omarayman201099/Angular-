import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';
import { FooterTwoComponent } from "./footer-two/footer-two.component";
import {GalleryComponent}from "./gallery/gallery.component"
import { RecccomenedProductComponent } from './recomend-product/recomend-product.component';




export class AppModule { }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, NavbarComponent, AppComponent,ProfileComponent, FooterComponent, HomeComponent, FooterTwoComponent,GalleryComponent,RecccomenedProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstTask';
}
