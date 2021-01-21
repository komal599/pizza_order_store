import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { PizzaCartComponent } from './components/pizza-cart/pizza-cart.component';
import { PizzaListComponent } from './components/pizza-cart/pizza-list/pizza-list.component';
import { CartComponent } from './components/pizza-cart/cart/cart.component';
import { CartItemComponent } from './components/pizza-cart/cart/cart-item/cart-item.component';
import { PizzaItemComponent } from './components/pizza-cart/pizza-item/pizza-item.component';

import { MyOrdersComponent } from './components/my-orders/my-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PizzaCartComponent,
    PizzaListComponent,
    CartComponent,
    CartItemComponent,
    PizzaItemComponent,
    
    MyOrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
