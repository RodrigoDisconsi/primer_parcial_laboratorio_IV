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
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { TablaActoresComponent } from './componentes/tabla-actores/tabla-actores.component';
import { DetalleActoresComponent } from './componentes/detalle-actores/detalle-actores.component';
import { BorrarActorComponent } from './componentes/borrar-actor/borrar-actor.component';
import { ModificarActorComponent } from './componentes/modificar-actor/modificar-actor.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { ListadoPeliculasComponent } from './componentes/listado-peliculas/listado-peliculas.component';
import { LoginComponent } from './componentes/login/login.component';
import { DetalleGithubComponent } from './componentes/detalle-github/detalle-github.component';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { ListadoRepartidoresComponent } from './componentes/listado-repartidores/listado-repartidores.component';
import { DetalleRepartidoresComponent } from './componentes/detalle-repartidores/detalle-repartidores.component';
import { MasterRepatidoresComponent } from './componentes/master-repatidores/master-repatidores.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TablaPaisesComponent,
    BienvenidaComponent,
    BusquedaComponent,
    TablaActoresComponent,
    DetalleActoresComponent,
    BorrarActorComponent,
    ModificarActorComponent,
    PeliculaAltaComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    DetallePaisComponent,
    DetallePeliculaComponent,
    ListadoPeliculasComponent,
    LoginComponent,
    DetalleGithubComponent,
    AltaRepartidorComponent,
    ListadoRepartidoresComponent,
    DetalleRepartidoresComponent,
    MasterRepatidoresComponent
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
