import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  name: string;
  table: number;
  menu: any[];

  
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private firebaseService: FirestoreService) { 
/*   schedule : string = 'Desayuno';*/
this.dataService.currentMessage.subscribe(nam => {
  this.name = nam;
})
this.dataService.currentNumber.subscribe(tab => {
  this.table = tab;
})
  }

  ngOnInit() {
  }

  showMenu(schedule: string){
    this.menu = [];
    this.router.navigate(['breakfast'],{relativeTo: this.route});
    this.firebaseService.getMenu(schedule).subscribe(ele => {
        ele.forEach((menuData) => {
          this.menu.push({
            id: menuData.payload.doc.id,
            data: menuData.payload.doc.data()
          });
        })
      });
    }
}
