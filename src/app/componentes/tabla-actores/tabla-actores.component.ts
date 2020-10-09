import { Component, AfterViewInit, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
import { ActorInterface } from 'src/app/models/actor-interface';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.scss']
})
export class TablaActoresComponent implements OnInit {

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() listaActores:ActorInterface[];
  @Output() actorSeleccionado = new EventEmitter<ActorInterface>();
  // dataSource: MatTableDataSource<ActorInterface>;
  public displayedColumns:string[];

  constructor() { 
    this.displayedColumns = ['nombre', 'apellido', 'sexo', 'fecha de nacimiento', 'nacionalidad' , 'foto', 'acciones'];
  }
  
  ngOnInit(){

  }

  seleccionarActor(actor:ActorInterface){
    this.actorSeleccionado.emit(actor);
  }
}
