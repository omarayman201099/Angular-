import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

import { Routes } from '@angular/router';





export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path : 'home' , component : HomeComponent},
  {path : 'profile' , component : ProfileComponent},
  {path : 'about' , component :  AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'gallery' , component : GalleryComponent}
];

