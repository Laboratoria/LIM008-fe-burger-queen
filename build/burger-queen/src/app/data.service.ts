import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private nameSource = new BehaviorSubject('');
  currentMessage = this.nameSource.asObservable();

  private tableSource = new BehaviorSubject(0);
  currentNumber = this.tableSource.asObservable();

  private orderNumberSource = new BehaviorSubject(0);
  currentOrderNumber = this.orderNumberSource.asObservable();

  private qtySource = new BehaviorSubject(0);
  currentQtyNumber = this.qtySource.asObservable();

  private subTotalSource = new BehaviorSubject(0);
  currentSubTotalNumber = this.subTotalSource.asObservable();

  private totalSource = new BehaviorSubject(0);
  currentTotalNumber = this.totalSource.asObservable();

  private orderSource = new BehaviorSubject([]);
  currentOrder = this.orderSource.asObservable();

  private deleteSource = new BehaviorSubject([]);
  currentDelete = this.deleteSource.asObservable();

  orderProductos = []
  newQty: number = 0;
  subTotalNumber = 0;

  constructor() { }

  changeName(name: string) {
    this.nameSource.next(name)
  }

  changeTable(table: number) {
    this.tableSource.next(table)
  }

  quantityNumberAdd(item){
   item.quantity += 1;
    this.qtySource.next(this.newQty);
  }

  quantityNumberRemove(item){
    if(item.quantity > 1) {
      item.quantity += -1;
    } else {
      alert("No puedes usar un número negativo")
    }
     this.qtySource.next(this.newQty)
   }

   obtainSubTotal(item) {
    this.subTotalNumber = item.quantity* item.precio;
    item.subTotal = this.subTotalNumber;
    this.subTotalSource.next(this.subTotalNumber);
   }

   obtainTotal(prods) {
    const total = prods.reduce((a,b) =>  {return a + b.subTotal}, 0);
    this.totalSource.next(total);
   }

  agregarProd(producto) {
    const arrId = this.orderProductos.map(prod =>
      prod.id)
    if (arrId.includes(producto.id)) {
      producto.quantity += 1;
    } else {
      this.orderProductos.push(producto);
      producto.quantity += 1;
    }
    this.orderSource.next(this.orderProductos);
  }


  deleteItem(prod) {
    const array = this.orderProductos; 
    const newArray = array.filter(item => item.id != prod.id)
    console.log(newArray);
    this.deleteSource.next(newArray);
  }

}

