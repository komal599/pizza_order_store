import { Component, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import {MessengerService} from 'src/app/services/messenger.service';
;
import{Router} from '@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']

})
export class CartComponent implements OnInit {


  options = [
    {id:1, name:'Order Received'},
    {id:2, name:'Preparing'},
    {id:3, name:'Ready to serve'},
  ]
  cartItems: any=[];
  orderItems: any=[];
  
 
  cartTotal = 0;
isTableViewShow: boolean = false;
 isTableShow:boolean = false;
 isCartEmpty:boolean = false;

 selectedLevel :any;
 printedOption:any   ;

  constructor(private msg: MessengerService, private route: Router) {

  }

ngOnInit(): void {
this.msg.getMsg().subscribe((pizza:any) => {
      this.cartItems.push({
        id: pizza.id,
        pizzaid: pizza.id,
        pizzaName: pizza.name,
        customerName: pizza.customerName,
        address: pizza.address,
        qty: pizza.qty,
        price: pizza.price,
 });

      this.cartTotal=0;
      this.cartItems.forEach((item:any) => {
        this.cartTotal += (item.qty * item.price)
      
      });
    });

    this.msg.getMsg2().subscribe((pizza:any) => {
      this.orderItems.push({
        pizzalist: pizza
        
        
 });

 console.log('OrderItems--->',this.orderItems[0].pizzalist[0].id);

     
    });

}

order(): any{
console.log(this.cartItems);

this.msg.sendMsg2(this.cartItems);
this.cartItems = [];
  console.log("Order Function Cartitems")
  this.isTableShow = true;
  this.isCartEmpty = true;
  if(this.cartItems.length>0){
  alert("Item is successfully ordered !! Enjoy the Meal :)")
  }
}

showOrderDetails(): any {
  this.isTableViewShow = true;
}

clickedRowDetails(value:any){
console.log(value);
this.printedOption = value;
}

}



 


