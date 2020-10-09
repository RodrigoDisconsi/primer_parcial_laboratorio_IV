import { Component, OnInit } from '@angular/core';
import { ActorInterface } from 'src/app/models/actor-interface';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public listaActores:ActorInterface[];
  public actorSeleccionado:ActorInterface;

  constructor(
    private fs:FirebaseService
  ) { }

  ngOnInit(): void {
    this.fs.getAll('actores').subscribe(actores => {
      this.listaActores = actores;
    });
  }

  actorSelec(e){
    this.actorSeleccionado = e;
    console.log(this.actorSeleccionado);
  }

  onLimpiar(){
    this.actorSeleccionado = null;
  }

  borrarAct(e){
    if(e){
      this.fs.removeObj('actores', this.actorSeleccionado).then(x =>{
        console.log("OK");
        this.actorSeleccionado = null;
      })
      .catch(e =>{
        console.log("ERROR ->", e);
      });
    }
  }

  modificarActor(e){
    this.fs.setObj('actores', e).then(x =>{
      console.log("OK");
      this.actorSeleccionado = null;
    })
    .catch(e =>{
      console.log("ERROR ->", e);
    });
  }
}
