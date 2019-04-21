import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  @Input() menus: any[] = [];
  arrayItems: any[] = [];

   constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.dataService.currentOrder.subscribe(ele => {
      this.arrayItems = ele;
    })

    this.dataService.currentDelete.subscribe(ele => {
      this.arrayItems = ele;
    })
  }

  ngOnInit() {
  }

  getOrder(order) {
    this.dataService.agregarProd(order);
  }
}
