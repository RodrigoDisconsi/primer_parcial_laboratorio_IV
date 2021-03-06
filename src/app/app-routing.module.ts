import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';

const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  {path: 'altaActor', component: AltaActorComponent},
  {path: 'actor/listado', component: BusquedaComponent},
  {path: 'peliculas/alta', component: PeliculaAltaComponent},
  {path: 'actor/actorpelicula', component: ActorPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
