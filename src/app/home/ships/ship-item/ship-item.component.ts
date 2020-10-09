import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ship } from 'src/app/models';

@Component({
  selector: 'app-ship-item',
  templateUrl: './ship-item.component.html',
  styleUrls: ['./ship-item.component.scss'],
})
export class ShipItemComponent implements OnInit {
  @Input() ship: Ship;
  defaultImage = '../assets/default.jpg';
  imageUrl: string;
  id: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getId(this.ship.url);
  }

  getId(id: string): void {
    const imgUrl = 'https://starwars-visualguide.com/assets/img/starships/';
    const shipId = id.split('/');
    this.id = shipId[shipId.length - 2];
    this.imageUrl = imgUrl + this.id + '.jpg';
  }

  getSingleShip(): void {
    this.router.navigate(['/home/ships', this.id]);
  }
}
