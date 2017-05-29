import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['ford', 'matruthi', 'suziki'];

  mydata(){

    return 'this is my data man !';
  } 

}
