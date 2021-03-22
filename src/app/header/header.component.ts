import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nextlanguage = 'ENGLISH';
  constructor() { }

  ngOnInit() {
  }
  changenextlanguage() {
    //   console.log(event.target['value']);
    //   this.nextlanguage = event.target['value'];
    console.log(this.nextlanguage);
  }
}
