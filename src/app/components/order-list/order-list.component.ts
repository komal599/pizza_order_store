import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import {MessengerService} from 'src/app/services/messenger.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderItem: any = [];
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
 
  }

}
