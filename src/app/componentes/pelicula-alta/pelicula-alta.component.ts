import { Component, OnInit } from '@angular/core';
import { ActorInterface } from 'src/app/models/actor-interface';
import{ PeliculaInterface } from '../../models/pelicula-interface';
import { FirebaseService } from '../../servicios/firebase.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  public pelicula:PeliculaInterface = {};
  public actorSeleccionado:ActorInterface;
  public nombreCompletoActor:string;
  public cargando:boolean = false;

  constructor(
    private fs:FirebaseService
  ) { }

  ngOnInit(): void {
  }

  cargarPelicula(){
    this.cargando = true;
    this.pelicula.id = Guid.create().toString();
    this.fs.setObj('peliculas', this.pelicula).then(x =>{
      console.log("OK");
      this.cargando = false;
    })
    .catch(e =>{
      console.log("ERROR ->", e);
      this.cargando = false;
    });
  }

  actorSelec(e){
    this.actorSeleccionado = e;
    this.pelicula.actor = this.actorSeleccionado;
    this.nombreCompletoActor = this.actorSeleccionado.nombre + " " + this.actorSeleccionado.apellido;
  }

}
