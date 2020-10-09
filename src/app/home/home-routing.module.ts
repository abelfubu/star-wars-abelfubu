import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateShipsGuard } from '../guards/activate-ships.guard';
import { HistoryComponent } from './history/history.component';

import { HomeComponent } from './home.component';
import { ShipsSingleComponent } from './ships/ships-single/ships-single.component';
import { ShipsComponent } from './ships/ships.component';

const childrenRoutes: Routes = [
  {
    path: 'ships',
    component: ShipsComponent,
    canActivate: [ActivateShipsGuard],
  },
  {
    path: 'ships/:id',
    component: ShipsSingleComponent,
    canActivate: [ActivateShipsGuard],
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
];

const routes: Routes = [
  { path: '', component: HomeComponent, children: childrenRoutes },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
