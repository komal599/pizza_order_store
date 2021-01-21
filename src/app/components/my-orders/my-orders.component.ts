import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import {MessengerService} from 'src/app/services/messenger.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orderItem: any = [];
 //@Input() myOrders : any;
//  orderedItem: any ;
 //cartTotal = 0;
  constructor(private msg:MessengerService, 
    private _ActivatedRoute: ActivatedRoute, private _Router: Router ) { }

    ngOnInit(): void {
      this.msg.getMsg().subscribe((pizza:any) => {
            this.orderItem.push({
              id: pizza.id,
              pizzaid: pizza.id,
              pizzaName: pizza.name,
              qty: pizza.qty,
              price: pizza.price,
       });
       console.log('Inside Order Item')
       console.log(this.orderItem)
          });
      }


}


