import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DarthVaderComponent } from './pai-filho/darth-vader/darth-vader.component';
import { DirtyCheckingComponent } from './dirty-checking/dirty-checking.component';
import { DiretivaComponent } from './diretiva/diretiva.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'parent', component: DarthVaderComponent},
    {path: 'dirty', component: DirtyCheckingComponent},
    {path: 'diretiva', component: DiretivaComponent},
    {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }