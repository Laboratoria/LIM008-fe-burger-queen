import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  name: string;
  table: number;

  
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { 
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


}
