import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {


  subject = new Subject();
  subject2 = new Subject();
  constructor() { }

  sendMsg(pizza:any){
 this.subject.next(pizza); //Triggering an event
  }

  getMsg(){
return this.subject.asObservable();
  }

  sendMsg2(pizza:any){
    this.subject2.next(pizza); //Triggering an event
     }
   
     getMsg2(){
   return this.subject2.asObservable();
     }
}
