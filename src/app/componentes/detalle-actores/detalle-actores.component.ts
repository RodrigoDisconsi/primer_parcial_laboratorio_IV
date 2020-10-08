import { Component, OnInit, Input } from '@angular/core';
import { ActorInterface } from 'src/app/models/actor-interface';

@Component({
  selector: 'app-detalle-actores',
  templateUrl: './detalle-actores.component.html',
  styleUrls: ['./detalle-actores.component.scss']
})
export class DetalleActoresComponent implements OnInit {

  @Input() actorSeleccionado:ActorInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
