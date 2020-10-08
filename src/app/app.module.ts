import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TablaPaisesComponent,
    AltaActorComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
