import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-luke-skywalker',
  templateUrl: './luke-skywalker.component.html',
  styleUrls: ['./luke-skywalker.component.css']
})
export class LukeSkywalkerComponent implements OnInit {

  @Input() Frase: string;
  @Output() LukeListener: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.LukeListener.emit("Nãoooooooooooo!");
  }
}
