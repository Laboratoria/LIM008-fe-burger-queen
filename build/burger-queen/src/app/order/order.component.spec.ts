import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderComponent } from './order.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { angularMenuCollection, angularOrdersCollection } from '../app-mock-Firestore';
import { AngularFirestore } from '@angular/fire/firestore';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterModule.forRoot([])],
      declarations: [ OrderComponent, BreakfastComponent, NewOrderComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: AngularFirestore, useValue: angularMenuCollection, angularOrdersCollection}
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    console.log(component.firebaseService.firestore)
    expect(component).toBeTruthy();
  });

  
});
