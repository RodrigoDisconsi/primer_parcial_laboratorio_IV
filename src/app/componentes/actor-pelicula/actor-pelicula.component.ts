import { Component, OnInit } from '@angular/core';
import { ActorInterface } from 'src/app/models/actor-interface';
import { PeliculaInterface } from 'src/app/models/pelicula-interface';
import { FirebaseService } from '../../servicios/firebase.service';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  public listaActores:ActorInterface[];
  public actorSeleccionado:ActorInterface;
  public listaPeliculaXActor:PeliculaInterface[];
  public paisActor:any;

  constructor(
    private fs:FirebaseService,
    private ps:PaisesService
  ) { }

  ngOnInit(): void {
    this.fs.getAll('actores').subscribe(actores => {
      this.listaActores = actores;
    });
  }

  actorSelec(e){
    this.actorSeleccionado = e;
    this.fs.getPeliculasXActor(this.actorSeleccionado).subscribe(x =>{
      if(x.length > 0){
        this.listaPeliculaXActor = x;
      }
      else{
        this.listaPeliculaXActor = null;
      }
    });
    this.ps.obtenerPaisesXNombre(this.actorSeleccionado.nacionalidad).subscribe(x =>{
      this.paisActor = x;
      console.log(this.paisActor);
    });
  }

  onLimpiar(){
    this.actorSeleccionado = null;
  }


}
