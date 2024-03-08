import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'hotel-seefreuden-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RoomsComponent, 
    RouterLink, 
    RouterLinkActive,
    NavigationComponent, 
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fcc_angular_hotelinventory';
}
