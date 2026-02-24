import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wallpapers',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'wallpapers',
    loadChildren: () =>
      import('./wallpapers/wallpapers-module').then(m => m.WallpapersModule)
  },
  {
    path: '**',
    redirectTo: 'wallpapers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}