import { Component, OnInit } from '@angular/core';
/* import { DataService } from "../data.service";
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  name: string="";
  number: string= "";

  constructor() {

  }

  ngOnInit() {
  }
  lgbtnclick() {
    console.log(`${this.name} y mesa ${this.number} `);
  }
}


