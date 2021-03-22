import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl: string;

  constructor(private api: HttpClient) {

    this.serverUrl = 'https://jsonplaceholder.typicode.com/';
    // this.serverUrl ='https://jsonplaceholder.typicode.com/photos';
  }
  get(urlFragment: string) {
    let url = this.bindUrl(urlFragment);
    console.log(url);
    return this.api.get(url);
  }

  bindUrl(url: String) {
    return this.serverUrl + url;
  }
}
