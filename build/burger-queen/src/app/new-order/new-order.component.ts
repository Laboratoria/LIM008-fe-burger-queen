import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
})
export class NewOrderComponent implements OnInit {
  items: any[];
  subTotalComp:number;
  totalComp : number;

  constructor(private dataService: DataService) {
    this.dataService.currentOrder.subscribe(ele => {      
      this.items = ele;
    })

    this.dataService.currentSubTotalNumber.subscribe(ele => {   
      this.subTotalComp = ele;
    })

    this.dataService.currentTotalNumber.subscribe(ele => {
      this.totalComp = ele;
    })

    this.dataService.currentDelete.subscribe(ele => { 
      console.log(ele)     
      this.items = ele;
    })
  }
  increase(item){
    this.dataService.quantityNumberAdd(item);
    }
  
    decrease(item){
      this.dataService.quantityNumberRemove(item);
      }
    
    getSubTotal(item){
     this.dataService.obtainSubTotal(item);
     return this.subTotalComp;
    }

    getTotal(items){
      this.dataService.obtainTotal(items);
     return this.totalComp;
    }
    delete(item){
      this.dataService.deleteItem(item);
      }

  ngOnInit() {
  }

}
