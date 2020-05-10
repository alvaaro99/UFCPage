import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogguedGuard } from './shared/guards/loggued/loggued.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'ranking',
    loadChildren: () =>
      import('./views/ranking/ranking.module').then((m) => m.RankingModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./views/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'simulator',
    loadChildren: () =>
      import('./views/simulator/simulator.module').then(
        (m) => m.SimulatorModule
      ),
    canActivate: [LogguedGuard],
  },
  {
    path: 'me',
    loadChildren: () =>
      import('./views/user/user.module').then((m) => m.UserModule),
    canActivate: [LogguedGuard],
  },
  { path: '**', redirectTo: 'ranking' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
