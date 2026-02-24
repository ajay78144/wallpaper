import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Wallpapers } from './wallpapers';

const routes: Routes = [
  {
    path: '',
    component: Wallpapers
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WallpapersRoutingModule {}