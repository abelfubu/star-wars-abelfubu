import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/models';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships-single',
  templateUrl: './ships-single.component.html',
  styleUrls: ['./ships-single.component.scss'],
})
export class ShipsSingleComponent implements OnInit {
  imageUrl = 'https://starwars-visualguide.com/assets/img/starships/';
  defaultImage = '../assets/default.jpg';
  ship: Ship;
  constructor(
    private route: ActivatedRoute,
    private shipsService: ShipsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.imageUrl += param.id + '.jpg';
      this.shipsService
        .getOne(param.id)
        .subscribe((ship) => (this.ship = ship));
    });
  }
}
