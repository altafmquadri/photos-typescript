import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css'],
})
export class DisplayPhotoComponent implements OnInit {
  source: string;
  constructor(private fetchPhoto: FetchPhotoService) {
    this.refresh();
  }

  refresh() {
    this.fetchPhoto.getPicture().subscribe({
      next: (imgUrl) => (this.source = imgUrl),
    });
  }

  ngOnInit(): void {}
}
