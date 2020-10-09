import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShipsComponent } from './ships/ships.component';
import { HeaderComponent } from './header/header.component';
import { ShipItemComponent } from './ships/ship-item/ship-item.component';
import { ShipsSingleComponent } from './ships/ships-single/ships-single.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [HomeComponent, ShipsComponent, HeaderComponent, ShipItemComponent, ShipsSingleComponent, HistoryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
