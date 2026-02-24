import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WallpapersRoutingModule } from './wallpapers-routing-module';
import { Wallpapers } from './wallpapers';

@NgModule({
  declarations: [
    Wallpapers
  ],
  imports: [
    CommonModule,
    WallpapersRoutingModule
  ]
})
export class WallpapersModule {}