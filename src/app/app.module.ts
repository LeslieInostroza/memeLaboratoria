import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // se importa animaciones
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ // van los componenetes
    AppComponent,
    MemeComponent,
    MemeFormComponent
  ],
  imports: [ // import = modulos
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//este es el packge.json de angular, define los componentes que usara la aplicacion, el bootstrap, dice cual es el componente principal