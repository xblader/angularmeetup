import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darth-vader',
  templateUrl: './darth-vader.component.html',
  styleUrls: ['./darth-vader.component.css']
})
export class DarthVaderComponent implements OnInit {

  fraseVaderPai: string = "Luke, eu sou seu pai!";
  respostaFilho: string;

  constructor() { }

  ngOnInit() {
  }

  OuveFilho(event) {
    this.respostaFilho = event;
  }
}
