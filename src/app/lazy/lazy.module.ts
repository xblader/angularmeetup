import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { Lazycomponent1Component } from './lazycomponent1/lazycomponent1.component';


@NgModule({
  declarations: [Lazycomponent1Component],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
