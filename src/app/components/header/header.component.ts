import { Component } from '@angular/core';
import './header.component.css'

@Component({
  selector: 'app-header',
  templateUrl :'./header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent {
  onX() {
      console.log("aj");
  }
}
