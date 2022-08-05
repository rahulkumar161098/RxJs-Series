import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let buyLaptop= new Promise((resolve, reject)=>{
      resolve("promise resolve");
      
    })
    buyLaptop.then(res=>{
      console.log("then code =>", res);
      
    })
  }

}
