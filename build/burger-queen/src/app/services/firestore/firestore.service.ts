import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor( public firestore: AngularFirestore) { }
  /* Obtener desayuno */
    public getMenu(tipoDeHorario: string) {
      return this.firestore.collection('menu', ref => ref.where('horario', '==', tipoDeHorario)).snapshotChanges();
    }
    public createOrder(data) {
      return this.firestore.collection('orders').add(data);
    }

    public getOrderNumber() {
      return this.firestore.collection('orders').snapshotChanges();
    }
  }

