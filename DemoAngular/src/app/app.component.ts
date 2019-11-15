import { Component } from '@angular/core';
import { UpdateService } from './update.service';
import { VersionCheckService } from './version-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private update: UpdateService, private check: VersionCheckService){

  }

  ngOnInit(){
    this.check.initVersionCheck('http://localhost:8080/version.json',2000);
  }
  
  title = 'serviveworker teste';
  //title = 'teste de tewte';
}
