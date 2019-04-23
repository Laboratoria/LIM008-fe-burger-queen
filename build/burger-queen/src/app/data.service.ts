import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirestoreService } from './services/firestore/firestore.service';

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
  name: string;
  table: number;
  total: number;
  orderNumber: number;

  newOrder = {
    customerName:'',
    table:0,
    orderNumber: 0,
    total: 0,
    order: [],
  }

  constructor(private firebaseService: FirestoreService) {  
  }

  changeName(name: string) {
    this.name = name;
    this.nameSource.next(this.name)
  }

  changeTable(table: number) {
    this.table = table;
    this.tableSource.next(this.table)
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
    this.total = prods.reduce((a ,b) => a + b.subTotal, 0);
    this.totalSource.next(this.total);
   }

  agregarProd(producto) {
    const arrId = this.orderProductos.map(prod =>
      prod.id);

    if (arrId.includes(producto.id)) {
      producto.quantity += 1;
    } else {
      this.orderProductos.push(producto);
      producto.quantity += 1;
    }
    this.orderSource.next(this.orderProductos);
  }


  deleteItem(prod) {
    this.orderProductos = this.orderProductos.filter(item => item.id != prod.id);
    this.deleteSource.next(this.orderProductos);
  }

  getOrderNumber(ordNumb){
    this.orderNumber = ordNumb;
   this.orderNumberSource.next(this.orderNumber)
  }

  sendOrdertoFs(number){
    const orderToSend = this.newOrder = {
      ...this.newOrder,
      customerName: this.name,
      table: this.table,
      orderNumber: number,
      total: this.total,
      order: this.orderProductos,
    }
    
  this.firebaseService.createOrder(orderToSend);
  this.orderProductos = [];
  }

}

