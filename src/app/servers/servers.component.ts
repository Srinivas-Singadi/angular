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

  somestring:string='';

  ngOnInit() {

    console.log(this.dataservices.cars);

    this.somestring = this.dataservices.mydata();


  }

}
