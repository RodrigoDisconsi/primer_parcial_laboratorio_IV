import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {
  
  public listaPaises:any;
  @Output() paisSeleccionado = new EventEmitter<any>();

  constructor(
    private paisService:PaisesService
  ) { }

  ngOnInit(): void {
    this.paisService.obtenerPaisesNorthAmerica().subscribe(x =>{
      this.listaPaises = x;
    });
  }

  onPais(pais){
    this.paisSeleccionado.emit(pais);
  }

}
