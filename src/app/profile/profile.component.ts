import { Component } from '@angular/core';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isHide:boolean=true;

  modelImg:string=""

  hideModle(eleTarget:EventTarget|null,imgRef:HTMLImageElement ):void{
    if(eleTarget == imgRef )return;
    else{
      this.isHide=true;
    }


  }


items:string[]=[
  '../../assets/New folder/poert1.png',
  '../../assets/New folder/port2.png',
  '../../assets/New folder/port3.png',
  '../../assets/New folder/port2.png',
  '../../assets/New folder/poert1.png',
  '../../assets/New folder/port3.png'
]
}
