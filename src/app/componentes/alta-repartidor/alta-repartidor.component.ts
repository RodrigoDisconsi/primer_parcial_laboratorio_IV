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
    dni: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],
    nombre: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(18)]],
    capsTrans: [1, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]],
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
    this.repartidor.nombre = this.altaRepartidorForm.value.nombre;
    this.repartidor.nacionalidad = this.paisSeleccionado;
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
      if(field == "edad")
        retorno = "must be over 18 years of age";
      else
        retorno = "at least 1";
    }
    else if(this.f[field].hasError("email")){
      retorno = "Not valid email.";
    }
    else if(this.f[field].getError('minlength') || this.f[field].getError('pattern')){
      retorno = "Invalid DNI format"
    }
    return retorno;
  }

  isNotValidField(field: string): boolean {
    return (this.f[field].touched || this.f[field].dirty == true)
      && !this.f[field].valid;
  }
  

}
