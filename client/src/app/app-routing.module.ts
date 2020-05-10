import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './views/ranking/ranking.component';
import { ShopComponent } from './views/shop/shop.component';
import { SimulatorComponent } from './views/simulator/simulator.component';
import { LoginComponent } from './views/login/login.component';
import { UserComponent } from './views/user/user.component';
import { LogguedGuard } from './shared/guards/loggued/loggued.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'shop', component: ShopComponent },
  {
    path: 'simulator',
    component: SimulatorComponent,
    canActivate: [LogguedGuard],
  },
  { path: 'me', component: UserComponent, canActivate: [LogguedGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
