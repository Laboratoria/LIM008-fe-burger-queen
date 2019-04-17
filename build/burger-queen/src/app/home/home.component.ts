import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  name: string;
  table: number;
  orderNumber: number;

  constructor(private dataService: DataService) {
    this.dataService.currentMessage.subscribe(nam => {
      this.name = nam;
    })

    this.dataService.currentNumber.subscribe(tab => {
      this.table = tab;
    })

  }

  ngOnInit() {
  }

  startClick() {
   const newName = this.name;  
   this.dataService.changeName(newName);

   const newTable = this.table;  
   this.dataService.changeTable(newTable);
}
}


