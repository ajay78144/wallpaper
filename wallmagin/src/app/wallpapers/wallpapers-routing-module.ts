import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallpapersLayout } from './layout/wallpapers-layout/wallpapers-layout';
import { Profile } from './profile/profile';
import { DisplayWallpapers } from './display-wallpapers/display-wallpapers';



const routes: Routes = [
  {
    path: '',
    component: WallpapersLayout,
    children: [
      {
        path: '',
        component: DisplayWallpapers
      },
      {
        path: 'profile',
        component: Profile
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WallpapersRoutingModule {}