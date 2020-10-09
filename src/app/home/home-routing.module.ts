import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ShipsComponent } from './ships/ships.component';

const childrenRoutes: Routes = [{ path: 'ships', component: ShipsComponent }];

const routes: Routes = [
  { path: '', component: HomeComponent, children: childrenRoutes },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
