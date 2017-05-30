import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class DataService {

  constructor(private http: Http) { }

  cars = ['ford', 'matruthi', 'suziki'];

         
       

  mydata(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json())
  
  }
  postmethos(){

        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
   
              return  this.http.post('https://jsonplaceholder.typicode.com/posts',options) 
                         .map((res:Response) => res.json())


  }

}
