import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  {path: 'altaActor', component: AltaActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
