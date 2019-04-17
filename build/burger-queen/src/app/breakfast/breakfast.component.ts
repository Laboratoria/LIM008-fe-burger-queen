import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  @Input() menus: any[] = [];
  arrayItems: any[] = [];

   constructor(private dataService: DataService) {
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
    console.log(this.arrayItems)
    this.dataService.agregarProd(order);
  }
  
}
