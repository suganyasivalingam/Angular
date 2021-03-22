import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit, OnDestroy {
  MyText = 'Hello';
  showme = false;

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


  ChangeMe() {
    // alert('Hi');
    this.showme = !this.showme;
  }
}
