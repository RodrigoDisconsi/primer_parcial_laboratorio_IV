import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimerParcial';

  constructor(private afs: AngularFirestore){
  
  }

  prueba(){
    this.afs.collection('prueba').add({
      hola:"hola"
    }).then(x =>{
      console.log("OK");
    });
  }
}
