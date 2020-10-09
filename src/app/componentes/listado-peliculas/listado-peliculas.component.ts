import { Component, Input, OnInit } from '@angular/core';
import { PeliculaInterface } from 'src/app/models/pelicula-interface';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input() listaPeliculas:PeliculaInterface[];

  constructor() { }

  ngOnInit(): void {
  }

}
