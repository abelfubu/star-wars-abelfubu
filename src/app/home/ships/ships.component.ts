import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  ships$: Observable<any>;
  constructor(private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.shipsService.getAll().subscribe((response) => console.log(response));
  }
}
