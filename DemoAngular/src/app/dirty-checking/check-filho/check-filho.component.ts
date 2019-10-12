import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-check-filho',
  templateUrl: './check-filho.component.html',
  styleUrls: ['./check-filho.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckFilhoComponent implements OnInit {

  @Input() lista:any[] = [];

  texto: string;
  constructor(private ref: ChangeDetectorRef) { 
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }

  ngOnInit() {
    
  }

  ngAfterViewChecked(){
    console.log('mudou');
    this.texto = this.lista.length >= 5 ? "Chegou a cinco" : "Não chegou a cinco"; 
  }

}
