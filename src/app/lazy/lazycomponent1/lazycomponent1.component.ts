import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazycomponent1',
  templateUrl: './lazycomponent1.component.html',
  styleUrls: ['./lazycomponent1.component.css']
})
export class Lazycomponent1Component implements OnInit {

  dynamic: string = "lazy load com mudanca no servidor";
  constructor() { }

  ngOnInit() {
  }

}
