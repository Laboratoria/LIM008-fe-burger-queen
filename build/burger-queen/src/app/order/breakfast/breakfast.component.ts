import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../data.service";
import {ActivatedRoute, Router} from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  menus: any;
  arrayItems: any[] = [];

   constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, public firebaseService: FirestoreService) {
    this.dataService.currentOrder.subscribe(ele => {
      this.arrayItems = ele;
    })

    this.dataService.currentDelete.subscribe(ele => {
      this.arrayItems = ele;
    })

  }

  ngOnInit() {
  }
  showMenu(schedule: string){
    this.menus = [];
    this.router.navigate(['breakfast'],{relativeTo: this.route});
    this.firebaseService.getMenu(schedule).subscribe(ele => {
        ele.forEach((menuData) => {
          this.menus.push({
            id: menuData.payload.doc.id,
            data: menuData.payload.doc.data()
          });
        })
      });
    }

  getOrder(order) {
    this.dataService.agregarProd(order);
  }
}
