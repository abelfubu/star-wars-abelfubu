import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { Ship } from 'src/app/models';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  ships$: Observable<Ship[]>;
  prev: string;
  next: string;
  currentPage = 1;
  constructor(private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.fetchShips();
    this.shipsService.setClearCacheInterval(1000 * 60 * 5);
  }

  private fetchShips(url?: string): void {
    this.ships$ = this.shipsService.getAll(url).pipe(
      map((response) => {
        this.prev = response.previous;
        this.next = response.next;
        return response;
      }),
      pluck('results')
    );
  }

  handleNext(): void {
    this.fetchShips(this.next);
    this.currentPage += 1;
  }

  handlePrev(): void {
    this.fetchShips(this.prev);
    this.currentPage -= 1;
  }
}
