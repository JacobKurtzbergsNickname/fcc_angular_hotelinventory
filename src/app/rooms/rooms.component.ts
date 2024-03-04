import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-waldlust-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  public hotelName = 'Hotel Waldlust';
  public numberOfRooms = 10;
  public hideRooms = false;
  public rooms = null

  constructor() { }

  ngOnInit() {
  }

  public toggleRooms() {
    console.log('toggleRooms()');
    this.hideRooms = !this.hideRooms;
  }

}
