import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  @Input() name: string;
  public menus = [];

  constructor( private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getOther().collection('menu', ref => ref.where('horario', '==', name)).snapshotChanges().subscribe((menuSnapshot) => {
      this.menus = [];
      menuSnapshot.forEach((menuData: any) => {
        this.menus.push({
          id: menuData.payload.doc.id,
          data: menuData.payload.doc.data()
        });
      })
    });
  }

}
