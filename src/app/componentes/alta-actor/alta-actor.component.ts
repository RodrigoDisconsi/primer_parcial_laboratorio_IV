import { Component, OnInit } from '@angular/core';
import { ActorInterface } from '../../models/actor-interface';
import { Guid } from 'guid-typescript';
import { FirebaseService } from '../../servicios/firebase.service';


@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent implements OnInit {

  public actor:ActorInterface = {};
  public paisSeleccionado:any;
  public cargando:boolean = false;

  constructor(
    private fs:FirebaseService
  ) { }

  ngOnInit(): void {

  }


  cargarActor(){
    this.cargando = true;
    this.actor.nacionalidad = this.paisSeleccionado.name;
    this.actor.id = Guid.create().toString();
    this.fs.setObj('actores', this.actor).then(x =>{
      console.log("OK");
      this.cargando = false;
    })
    .catch(e =>{
      console.log("ERROR ->", e);
      this.cargando = false;
    })
  }

  paisSelec(pais){
    this.paisSeleccionado = pais;
  }
}
