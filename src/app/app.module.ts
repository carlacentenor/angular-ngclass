import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{APP_ROUTING} from './app.routing';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
