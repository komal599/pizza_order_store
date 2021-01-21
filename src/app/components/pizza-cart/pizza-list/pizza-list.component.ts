import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
  
})
export class PizzaListComponent implements OnInit {

  pizzaList: Pizza[] = [];
  constructor(private pizzaservice: PizzaService) { }

  ngOnInit(): void {
    this.pizzaList = (this.pizzaservice.getPizza());
  }

}
