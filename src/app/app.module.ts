import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    MemeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//este es el packge.json de angular, define los componentes que usara la aplicacion, el bootstrap, dice cual es el componente principal