import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { environment } from '../environments/environment';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { LoginComponent } from './componentes/login/login.component';
import { DetalleGithubComponent } from './componentes/detalle-github/detalle-github.component';
import { ListadoRepartidoresComponent } from './componentes/listado-repartidores/listado-repartidores.component';
import { DetalleRepartidoresComponent } from './componentes/detalle-repartidores/detalle-repartidores.component';
import { MasterRepatidoresComponent } from './componentes/master-repatidores/master-repatidores.component';
import { PizzaComponent } from './componentes/pizza/pizza.component';
import { ModificaComponent } from './componentes/pizza/modifica/modifica.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BienvenidaComponent,
    DetallePaisComponent,
    LoginComponent,
    DetalleGithubComponent,
    ListadoRepartidoresComponent,
    DetalleRepartidoresComponent,
    MasterRepatidoresComponent,
    PizzaComponent,
    ModificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
