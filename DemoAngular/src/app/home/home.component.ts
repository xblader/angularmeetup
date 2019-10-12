import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { takeWhile } from 'rxjs/operators';
import { Item } from './Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alive: boolean = true;
  list: Item[] = [];
  constructor(private home: HomeService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  trazerLista() {
    this.home.getListaMeetup().pipe(takeWhile(() => this.alive)).subscribe((item: Item) => {
      this.list.push(item);
    });
  }

  limparLista() {
    this.list = [];
  }
}
