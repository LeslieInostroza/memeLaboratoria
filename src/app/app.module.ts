import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // se importa animaciones
import {MatCardModule} from '@angular/material/card';
// importacion de firebase y angularfire
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AuthFormComponent } from './auth-form/auth-form.component'; // ng generate service auth - ng g s auth, se crrea servidor

@NgModule({
  declarations: [ // van los componenetes
    AppComponent,
    MemeComponent,
    MemeFormComponent,
    AuthFormComponent
  ],
  imports: [ // import = modulos
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//este es el packge.json de angular, define los componentes que usara la aplicacion, el bootstrap, dice cual es el componente principal