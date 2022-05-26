import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaRepartidorComponent } from '../alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AltaRepartidorComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class AltaRepartidorModule { }
