import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  uploadImage(img): void {
    this.imageService.uploadImage(img);
  }

  ngOnInit(): void {
  }

}
