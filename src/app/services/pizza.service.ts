import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizzas: Pizza[] = [
    new Pizza(1, 'The Unthinkable Pizza', 'Loaded with Plant Based Protein topping along with Black Olives & Red Paprika!',100,1, 'Saurav','34, Parkstreet, kolkata'),
    new Pizza(2, 'Margherita', 'A classic delight with 100% Real mozzarella cheese',150,1, 'Jack', '21, Ejipura, Bangalore'),
    new Pizza(3, 'Farmhouse', 'Delightful combination of onion, capsicum, tomato & grilled mushroom',500, 1, 'Tom', '13, Indirapuram, Noida'),
    new Pizza(4, 'Pepper Barbecue Chicken', 'Pepper barbecue chicken for that extra zing',200, 1, 'Joe', '24, Sector-15, kolkata'),
    new Pizza(5, 'Chicken Sausage', 'American classic! Spicy, herbed chicken sausage on pizza',100, 1, 'Rohit','32, Parkstreet, kolkata'),
    new Pizza(6, 'Veggie Paradise', 'The awesome foursome! Golden corn, black olives, capsicum, red paprika',100, 1, 'Tina', '11, Sector-1, Delhi')
  ]
  
  constructor() { }

  getPizza(): Pizza[]{
  
    return this.pizzas;

    
  }
}
