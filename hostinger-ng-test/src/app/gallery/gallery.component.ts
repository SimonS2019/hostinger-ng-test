import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  mediaList: { type: string; url: string; description: string }[] = [];

  ngOnInit() {
    // Example media URLs with descriptions
    this.mediaList = [
      {
        type: 'image',
        url: 'https://drive.google.com/drive-viewer/AKGpihaaNYWyOWdtwFSTKcdwuI3ML3fd85wxfXJzzCeAcGAyMO7UGJ4vwhH61Wq_04BlKAoNnfXtaOesuXnzNSNYIkfYxPYUydKzXIw=s1600-rw-v1',
        description: 'Image 0 description',
      },
      {
        type: 'image',
        url: 'https://drive.google.com/drive-viewer/AKGpihY41GJzj1QEbv49Ekb2XVjWpLTDR2PemRWoAoX7ptfht8lS-f7Pds0C2C741UbUHh4Mc7o8sDwlPIFLtJ3AtOexgvKl-H0jc88=s1600-rw-v1',
        description: 'Image 1 description',
      },
      {
        type: 'image',
        url: 'https://drive.google.com/drive-viewer/AKGpihYw50JLYCtGqEPGeM3FQPkOleG0--PbMRfog33ZWbXbBkK60d3dtdwM2jFujtiOG02UiQ-Bs2Yb5EIl119W4prDW5KZbCO_9x8=s1600-rw-v1',
        description: 'Image 2 description',
      },
      // { type: 'video', url: 'https://example.com/path/to/your/video2.mp4', description: 'Video 2 description' }
    ];
  }
}
