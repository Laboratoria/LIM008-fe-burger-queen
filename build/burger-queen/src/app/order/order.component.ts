import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public schedule = 'Breakfast'

  constructor(private route: ActivatedRoute, private router: Router) { }
/*   schedule : string = 'Desayuno';
 */
  ngOnInit() {
  }
  showMenu(){
    console.log(this);
    this.router.navigate(['breakfast'],{relativeTo: this.route});
  }
}
