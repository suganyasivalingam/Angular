import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  album=[];

  constructor(private api: ApiService) { 
    this.api.get('photos').subscribe(
      (data: any[]) => {
        console.log(data);
        this.album = data;
      }
    );
  }

  ngOnInit() {
  }

}
