import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaRepartidorComponent } from '../alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';



@NgModule({
  declarations: [
    AltaRepartidorComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AltaRepartidorModule { }
