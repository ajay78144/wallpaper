import { Component } from '@angular/core';

@Component({
  selector: 'app-display-wallpapers',
  standalone: false,
  templateUrl: './display-wallpapers.html',
  styleUrl: './display-wallpapers.css',
})
export class DisplayWallpapers {
wallpapers = [
  { title: 'Nature 1', image: 'https://picsum.photos/400/600?1' },
  { title: 'Nature 2', image: 'https://picsum.photos/400/600?2' },
  { title: 'Nature 3', image: 'https://picsum.photos/400/600?3' },
  { title: 'Nature 4', image: 'https://picsum.photos/400/600?4' }
];
}
