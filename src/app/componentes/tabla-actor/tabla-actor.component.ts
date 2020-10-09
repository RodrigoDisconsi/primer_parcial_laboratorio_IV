import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActorInterface } from 'src/app/models/actor-interface';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  public listaActores:ActorInterface[];
  @Output() actorSeleccionado = new EventEmitter<ActorInterface>();

  constructor(
    private fs:FirebaseService
  ) { }

  ngOnInit(): void {
    this.fs.getAll('actores').subscribe(actores => {
      this.listaActores = actores;
    })
  }

  onActor(actor:ActorInterface){
    this.actorSeleccionado.emit(actor);
  }

}
