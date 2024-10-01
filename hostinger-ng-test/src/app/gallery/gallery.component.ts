import { Component, OnInit } from '@angular/core';
import { imagePaths } from './image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  mediaList: { type: string; url: string; description: string }[] = [];

  ngOnInit() {
    this.mediaList = imagePaths;
  }
}
