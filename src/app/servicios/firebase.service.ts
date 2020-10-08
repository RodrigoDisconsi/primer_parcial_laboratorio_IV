import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private afs: AngularFirestore){
  }

  getAll(entidad:string){
    return this.afs.collection(entidad).valueChanges();
  }

  // getOneActor(idActor:string){
  //   return 
  // }


  setObj(entidad:string, obj:any){
    return this.afs.collection(entidad).doc(obj.id).set(obj, {merge: true});
  }

  removeObj(entidad:string, obj:any){
    return this.afs.collection(entidad).doc(obj.id).delete();
  }
}
