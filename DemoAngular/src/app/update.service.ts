import { Injectable } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(evt => {
      // uma atualização da aplicação está disponível...
      console.log(evt);
    });
  }
}