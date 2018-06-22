import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
    `
    .invalid-tooltip {
      display: block !important;
      position: absolute !important;
      top: 0% !important;
    }
    `
  ]
})
export class TestComponent implements OnInit {
  model = {
    title: '',
    author: '',
    url: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
