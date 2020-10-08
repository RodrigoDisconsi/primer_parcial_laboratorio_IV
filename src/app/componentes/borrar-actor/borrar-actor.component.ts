import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActorInterface } from 'src/app/models/actor-interface';

@Component({
  selector: 'app-borrar-actor',
  templateUrl: './borrar-actor.component.html',
  styleUrls: ['./borrar-actor.component.scss']
})
export class BorrarActorComponent implements OnInit {

  @Output() borrarActor = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onBorrar(){
    this.borrarActor.emit(true);
  }

}
