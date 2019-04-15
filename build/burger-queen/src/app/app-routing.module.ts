import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { NewOrderComponent } from './new-order/new-order.component';


const routes: Routes = [
  {
  path: '', 
  component: HomeComponent},
{
  path: 'order', 
  component: OrderComponent,
  children: [
    {path: 'breakfast',
     component: BreakfastComponent
    },
    {path: 'newOrder',
    component: NewOrderComponent
   }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
