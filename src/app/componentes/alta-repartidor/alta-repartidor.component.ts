import { Component, OnInit } from '@angular/core';
import { RepartidorInterface } from 'src/app/models/repartidor-interface';
import { Guid } from 'guid-typescript';
import { FirebaseService } from '../../servicios/firebase.service';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss']
})
export class AltaRepartidorComponent implements OnInit {

  public repartidor:RepartidorInterface = {};
  public paisSeleccionado:any;
  public cargando:boolean = false;
  public altaRepartidorForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    edad: ['', Validators.required],
    capsTrans: [1],
    unidadPropia: [false]
  });

  constructor(
    private fs:FirebaseService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }


  cargarRepartidor(){
    this.cargando = true;
    this.repartidor.id = Guid.create().toString();
    this.repartidor.nombre = this.paisSeleccionado.name;
    this.repartidor.edad = this.altaRepartidorForm.value.edad;
    this.repartidor.capTrans = this.altaRepartidorForm.value.capsTrans;
    this.repartidor.unidadPropia = this.altaRepartidorForm.value.unidadPropia;
    this.fs.setObj('repartidores', this.repartidor).then(x =>{
      alert("OK");
      this.cargando = false;
    })
    .catch(e =>{
      console.log("ERROR ->", e);
      this.cargando = false;
    });
  }

  paisSelec(pais){
    this.paisSeleccionado = pais;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.altaRepartidorForm.controls;
  }

  getErrorMessage(field: string): string {
    let retorno = "";
    if(this.f[field].hasError("required")) {
      retorno = "Empty.";
    }
    else if(this.f[field].hasError("min")) {
      retorno = "Dato inválido";
    }
    else if(this.f[field].hasError("email")){
      retorno = "Not valid email.";
    }
    return retorno;
  }

  isNotValidField(field: string): boolean {
    return (this.f[field].touched || this.f[field].dirty == true)
      && !this.f[field].valid;
  }
  

}
