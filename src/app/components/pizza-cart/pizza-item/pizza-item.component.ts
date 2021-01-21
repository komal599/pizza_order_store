import { Component, OnInit, Input } from '@angular/core';
import {Pizza} from 'src/app/models/pizza';
import {MessengerService} from 'src/app/services/messenger.service';
@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {

   @Input()
  pizzaItem!: Pizza;
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
  
    this.msg.sendMsg(this.pizzaItem)

  }

}
