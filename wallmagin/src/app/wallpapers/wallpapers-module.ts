import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WallpapersRoutingModule } from './wallpapers-routing-module';
import { WallpapersLayout } from './layout/wallpapers-layout/wallpapers-layout';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Profile } from './profile/profile';
import { DisplayWallpapers } from './display-wallpapers/display-wallpapers';
// import { Wallpapers } from './wallpapers';

@NgModule({
  declarations: [
    // Wallpapers
  
    WallpapersLayout,
    Header,
    Footer,
    Profile,
    DisplayWallpapers
  ],
  imports: [
    CommonModule,
    WallpapersRoutingModule
  ]
})
export class WallpapersModule {}