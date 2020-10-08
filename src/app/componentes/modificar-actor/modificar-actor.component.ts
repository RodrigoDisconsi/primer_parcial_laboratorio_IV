import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActorInterface } from 'src/app/models/actor-interface';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styleUrls: ['./modificar-actor.component.scss']
})
export class ModificarActorComponent implements OnInit {

  @Input() actor:ActorInterface;
  @Output() actorMod = new EventEmitter<ActorInterface>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirCambios(){
    this.actorMod.emit(this.actor);
  }

}
