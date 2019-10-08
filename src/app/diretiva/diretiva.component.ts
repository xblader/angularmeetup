import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent implements OnInit {
  posicaoX: any;
  posicaoY: any;
  
  constructor() { }

  ngOnInit() {
  }

  getnovaposicao(event){
    this.posicaoX = event.X;
    this.posicaoY = event.Y;
  }

}
