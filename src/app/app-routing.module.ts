import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { LoginComponent } from './componentes/login/login.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { LoginActiveGuard } from 'src/app/guard/login-active.guard';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { MasterRepatidoresComponent } from './componentes/master-repatidores/master-repatidores.component';

const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'altaRepartidor', component: AltaRepartidorComponent, canActivate:[LoginActiveGuard], loadChildren: () => import('../app/componentes/alta-repartidor/alta-repartidor.module').then(m => m.AltaRepartidorModule)},
  {path: 'repartidores', component: MasterRepatidoresComponent},
  // {path: 'actor/listado', component: BusquedaComponent},
  // {path: 'peliculas/alta', component: PeliculaAltaComponent},
  // {path: 'actor/actorpelicula', component: ActorPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
