import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateService } from './update.service';
import { HomeService } from './home/home.service';
import { DarthVaderComponent } from './pai-filho/darth-vader/darth-vader.component';
import { LukeSkywalkerComponent } from './pai-filho/luke-skywalker/luke-skywalker.component';
import { DirtyCheckingComponent } from './dirty-checking/dirty-checking.component';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { MouseOverDirective } from './diretiva/mouseover.directive';
import { CheckFilhoComponent } from './dirty-checking/check-filho/check-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DarthVaderComponent,
    LukeSkywalkerComponent,
    DirtyCheckingComponent,
    DiretivaComponent,
    MouseOverDirective,
    CheckFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [UpdateService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
