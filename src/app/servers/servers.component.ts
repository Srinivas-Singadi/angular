import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private dataservices:DataService) {
    
  } 

  //somestring:string='';

  testarr :any[] =[];

  ngOnInit() {

   // console.log(this.dataservices.cars);

    //this.somestring = this.dataservices.mydata();

    this.dataservices.mydata().subscribe(
      (data)=>{
       this.testarr.push(data);
   console.log(this.testarr);
    },
    (error)=>{
    console.log(error);
    });

  }

}
