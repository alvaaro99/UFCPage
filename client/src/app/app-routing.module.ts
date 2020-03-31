import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './views/ranking/ranking.component';
import { ShopComponent } from './views/shop/shop.component';
import { SimulatorComponent } from './views/simulator/simulator.component';

const routes: Routes = [
  { path: 'ranking', component: RankingComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'simulator', component: SimulatorComponent },
  { path: '**', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
