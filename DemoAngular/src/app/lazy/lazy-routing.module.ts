import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazycomponent1Component } from './lazycomponent1/lazycomponent1.component';

const routes: Routes = [
  {path: '', component: Lazycomponent1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }