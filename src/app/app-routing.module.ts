import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyOrdersComponent } from 'src/app/components/my-orders/my-orders.component';
import {CartComponent} from 'src/app/components/pizza-cart/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'app-my-orders', component: MyOrdersComponent },
  {path: 'app-cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
