import { Component, OnInit } from '@angular/core';
import { videoPaths } from './video';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {
  videoList: { type: string; url: string; description: string }[] = [];

  ngOnInit() {
    this.videoList = videoPaths;
  }
}