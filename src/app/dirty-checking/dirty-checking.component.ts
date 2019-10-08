import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dirty-checking',
  templateUrl: './dirty-checking.component.html',
  styleUrls: ['./dirty-checking.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirtyCheckingComponent implements OnInit {
  total: number = 0;
  constructor() { }

  ngOnInit() {
  }

  incrementa(){
    this.total++;
  }

}
